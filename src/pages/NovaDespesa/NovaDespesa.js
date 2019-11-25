import React, {useState} from 'react';
import {Button, Picker, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {TextInputMask} from 'react-native-masked-text';
import * as themes from './../../styles/themes';
import ThemeContext from './../../styles/themes/context';
import ThemeSwitcher from './../../components/ThemeSwitcher/ThemeSwitcher';
import {ThemeProvider} from 'styled-components';
import getRealm from './../../services/realm';

import {
  Container,
  InputContainer,
  ButtonContainer,
  LabelButton,
  Form,
} from './styles';

export default NovaDespesa = ({navigation}) => {
  const [id, setId] = useState(0);
  const [type] = useState('expense');
  const [description, setDescription] = useState(0);
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(0);
  const [category, setCategory] = useState(0);
  const [status, setStatus] = useState(1);

  const [theme, setTheme] = useState({theme: themes.dark});

  async function loadRepositories() {
    const realm = await getRealm();
    const data = realm.objects('Expense').sorted('id', 1);

    console.log('get', data);
  }

  async function getId() {
    const realm = await getRealm();
    setId(realm.objects('transaction').max('id') + 1);
  }

  async function saveTransaction() {
    await getId();
    const data = {
      id,
      type,
      description,
      value,
      date,
      category,
      status,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('transaction', data);
    });

    console.log(data);
    return data;
  }

  const toggleTheme = () => {
    if (theme.theme === themes.dark) {
      console.log(theme);
    }
    setTheme({
      theme: theme.theme === themes.dark ? themes.light : themes.dark,
    });
  };

  return (
    <Container>
      <ThemeContext.Provider value={theme}>
        <Button title="teste" onPress={toggleTheme} />
        <Button title="getBd" onPress={loadRepositories} />
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <Form>
                <ButtonContainer>
                  <LabelButton>SALVAR</LabelButton>
                </ButtonContainer>

                <TextInput />
                <InputContainer>
                  <TextInput
                    style={{
                      height: 45,
                      fontSize: 17,
                      paddingLeft: 15,
                      paddingRight: 15,
                    }}
                    placeholder="Descrição"
                    value={description}
                    onChangeText={description => {
                      setDescription(description);
                    }}
                  />
                </InputContainer>
                <InputContainer>
                  <TextInput
                    style={{
                      height: 45,
                      fontSize: 17,
                      paddingLeft: 15,
                      paddingRight: 15,
                    }}
                    placeholder="Data"
                    value={date}
                    onChangeText={date => {
                      setDate(date);
                    }}
                  />
                </InputContainer>

                <InputContainer>
                  <Picker
                    selectedValue={category}
                    onValueChange={selected => setCategory(selected)}>
                    <Picker.Item label="Alimentação" value="Alimentação" />
                    <Picker.Item label="Veículo" value="Veículo" />
                    <Picker.Item label="Farmácia" value="Farmácia" />
                    <Picker.Item label="Contas Fixas" value="Contas Fixas" />
                    <Picker.Item label="Lazer" value="Lazer" />
                    <Picker.Item label="Saúde" value="Saúde" />
                  </Picker>
                </InputContainer>
                <InputContainer>
                  <TextInputMask
                    type={'money'}
                    value={value}
                    onChangeText={value => {
                      setValue(value);
                    }}
                    style={{paddingLeft: 15, fontWeight: 'bold', fontSize: 17}}
                  />
                </InputContainer>
                <TouchableOpacity onPress={saveTransaction}>
                  <ButtonContainer>
                    <LabelButton>SALVAR</LabelButton>
                  </ButtonContainer>
                </TouchableOpacity>
              </Form>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </Container>
  );
};

import React, {useState} from 'react';
import {Button, Picker, TouchableOpacity, View, StatusBar} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {TextInputMask} from 'react-native-masked-text';
import * as themes from './../../styles/themes';
import ThemeContext from './../../styles/themes/context';
import {ThemeProvider} from 'styled-components';
import getRealm from './../../services/realm';
import DatePicker from 'react-native-datepicker';
import NumberFormat from 'react-number-format';
import Header from '../../components/Header';

import {
  Container,
  InputContainer,
  ButtonContainer,
  LabelButton,
  Form,
} from './styles';

export default NovaDespesa = ({navigation}) => {
  const [type] = useState('expense');
  const [description, setDescription] = useState(0);
  const [value, setValue] = useState(0);
  const [date, setDate] = useState(0);
  const [category, setCategory] = useState(0);
  const [status, setStatus] = useState(1);

  const [theme, setTheme] = useState({theme: themes.light});

  async function loadRepositories() {
    const realm = await getRealm();
    const data = realm.objects('Expense').sorted('id', 1);
    console.log('get', data);
  }

  async function getId() {
    const realm = await getRealm();
    return realm.objects('transaction').max('id') + 1;
  }

  async function saveTransaction() {
    const id = await getId();
    /*  const valueNegative = Number(value) * Number(-1);
    console.log(valueNegative); */
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
      <Header title="Adicionar Despesa" />
      <StatusBar barStyle="dark-content" backgroundColor="#f7f7f7" />
      <ThemeContext.Provider value={theme}>
        {/* <Button title="teste" onPress={toggleTheme} /> */}
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <View style={{flex: 10}}>
                <Form>
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
                    <DatePicker
                      date={date}
                      mode="date"
                      placeholder="Selecione uma data"
                      format="DD-MM-YYYY"
                      minDate="01-01-2019"
                      maxDate="31-12-2025"
                      confirmBtnText="Ok"
                      cancelBtnText="Cancelar"
                      style={{width: '100%'}}
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 4,
                          top: 4,
                          marginLeft: 4,
                        },
                        dateInput: {
                          borderWidth: 0,
                        },
                        dateText: {
                          fontSize: 17,
                          textAlign: 'left',
                        },
                        placeholderText: {
                          fontSize: 17,
                        },
                      }}
                      onDateChange={date => {
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
                    {/*  <NumberFormat
                    value={2456981}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  /> */}
                  </InputContainer>
                </Form>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={saveTransaction}>
                  <ButtonContainer>
                    <LabelButton>SALVAR</LabelButton>
                  </ButtonContainer>
                </TouchableOpacity>
              </View>
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </Container>
  );
};

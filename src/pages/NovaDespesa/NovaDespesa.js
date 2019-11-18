import React, { useState } from 'react';
import { Button, Picker, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import * as themes from './../../styles/themes';
import ThemeContext from './../../styles/themes/context';
import ThemeSwitcher from './../../components/ThemeSwitcher/ThemeSwitcher';
import { ThemeProvider } from 'styled-components';

import {
  Container,
  InputContainer,
  ButtonContainer,
  LabelButton
} from './styles';

export default NovaDespesa = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);

  const [theme, setTheme] = useState({ theme: themes.dark });

  const toggleTheme = () => {
    if (theme.theme === themes.dark) {
      console.log(theme);
    }
    setTheme({
      theme: theme.theme === themes.dark ? themes.light : themes.dark
    });
  };

  return (
    <Container>
      <ThemeContext.Provider value={theme}>
        <Button title='teste' onPress={toggleTheme} />
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <ButtonContainer>
                <LabelButton>SALVAR</LabelButton>
              </ButtonContainer>
            </ThemeProvider>
          )}
          {/* <TextInput />
          <InputContainer>
            <TextInput
              style={{
                height: 45,
                fontSize: 17,
                paddingLeft: 15,
                paddingRight: 15
              }}
              placeholder='Descrição'
            />
          </InputContainer>
          <InputContainer>
            <TextInput
              style={{
                height: 45,
                fontSize: 17,
                paddingLeft: 15,
                paddingRight: 15
              }}
              placeholder='Data'
            />
          </InputContainer>

          <InputContainer>
            <Picker
              selectedValue={category}
              onValueChange={selected => setCategory(selected)}
            >
              <Picker.Item label='Alimentação' value='Alimentação' />
              <Picker.Item label='Veículo' value='Veículo' />
              <Picker.Item label='Farmácia' value='Farmácia' />
              <Picker.Item label='Contas Fixas' value='Contas Fixas' />
              <Picker.Item label='Lazer' value='Lazer' />
              <Picker.Item label='Saúde' value='Saúde' />
            </Picker>
          </InputContainer>
          <InputContainer>
            <TextInputMask
              type={'money'}
              value={value}
              style={{ paddingLeft: 15, fontWeight: 'bold', fontSize: 17 }}
              onChangeText={value => {
                setValue(value);
              }}
            />
          </InputContainer>
          <TouchableOpacity onPress={() => navigation.navigate('Despesas')}>
            <ButtonContainer>
              <LabelButton>SALVAR</LabelButton>
            </ButtonContainer>
          </TouchableOpacity> */}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </Container>
  );
};

import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import {TextInputMask} from 'react-native-masked-text';

import {
  Container,
  TxtHeaderForm,
  HeaderForm,
  BtnFechar,
  TxtBtnFechar,
  Form,
  InputContainer,
  Input,
  Picker,
  BtnNovaConta,
  TxtNovaConta,
  styles,
} from './styles';

export default function ContaForm({navigation}) {
  const [date, setDate] = useState(0);
  const [category, setCategory] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <HeaderForm>
        <TxtHeaderForm>NOVA CONTA</TxtHeaderForm>
        <BtnFechar onPress={() => navigation.goBack()}>
          <TxtBtnFechar>X</TxtBtnFechar>
        </BtnFechar>
      </HeaderForm>
      <Form>
        <InputContainer>
          <Picker
            selectedValue={category}
            onValueChange={selected => setCategory(selected)}
            style={styles.input}>
            <Picker.Item label="Selecione uma conta" value="" />
            <Picker.Item label="Conta BB" value="Veículo" />
            <Picker.Item label="Conta Caixa" value="Farmácia" />
            <Picker.Item label="Rico" value="Contas Fixas" />
          </Picker>
        </InputContainer>
        <Input placeholder="Nome" />
        <InputContainer>
          <Picker
            selectedValue={category}
            onValueChange={selected => setCategory(selected)}
            style={styles.input}>
            <Picker.Item label="Selecione uma categoria" value="" />
            <Picker.Item label="Conta Corrente" value="Alimentação" />
            <Picker.Item label="Conta Poupança" value="Veículo" />
            <Picker.Item label="Investimento" value="Farmácia" />
            <Picker.Item label="Carteira" value="Contas Fixas" />
          </Picker>
        </InputContainer>
        <InputContainer>
          <TextInputMask
            type={'money'}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: '',
            }}
            value={value}
            onChangeText={value => {
              setValue(value);
            }}
            style={styles.input}
          />
        </InputContainer>
      </Form>
      <BtnNovaConta
        activeOpacity={0.9}
        onPress={() => navigation.navigate('ContaForm')}>
        <TxtNovaConta>SALVAR</TxtNovaConta>
      </BtnNovaConta>
    </Container>
  );
}

import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
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
  BtnNovaConta,
  TxtNovaConta,
  styles,
  Picker,
  ImgConta,
  ContainerIcon,
} from './styles';

export default function ContaForm({navigation}) {
  const [contas] = useState({
    '000': {label: 'Carteira', description: 'Dinheiro em espécie', code: '000'},
    '001': {
      label: 'Banco do Brasil - 001',
      description: 'Conta Corrente',
      code: '001',
      icon: require('./../../assets/contas/bbicon.png'),
    },
    '104': {
      label: 'Caixa Econômica - 104',
      description: 'Conta Corrente',
      code: '104',
    },
    '260': {
      label: 'Nuconta - 260',
      description: 'Conta Poupança / Investimento',
      code: '260',
      icon: require('./../../assets/contas/nuicon.png'),
    },
    '204': {
      label: 'Bradesco - 204',
      description: 'Conta Corrente',
      code: '204',
    },
    '033': {
      label: 'Santander - 033',
      description: 'Conta Corrente',
      code: '033',
    },
    '341': {label: 'Itaú - 341', description: 'Conta Corrente', code: '341'},
  });
  const [description, setDescription] = useState(0);
  const [value, setValue] = useState(0);
  const [conta, setConta] = useState(0);
  const [icon, setIcon] = useState('');

  const setIconAccount = code => {
    setIcon(contas[code].icon);
  };

  const setPropertyAccount = code => {
    setConta(code);
    setDescription(contas[code].description);
    setIconAccount(code);
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <HeaderForm>
        <TxtHeaderForm>NOVA CONTA</TxtHeaderForm>
        <BtnFechar onPress={() => navigation.goBack()}>
          <TxtBtnFechar>X</TxtBtnFechar>
        </BtnFechar>
      </HeaderForm>
      <ContainerIcon>
        <ImgConta source={icon} />
      </ContainerIcon>
      <Form>
        <InputContainer>
          <Picker
            selectedValue={conta}
            onValueChange={selected => {
              setPropertyAccount(selected);
            }}
            style={styles.input}>
            <Picker.Item label="Carteira" value="000" />
            <Picker.Item label="Banco do Brasil - 001" value="001" />
            <Picker.Item label="Caixa Econômica - 104" value="104" />
            <Picker.Item label="Nuconta - 260" value="260" />
            <Picker.Item label="Bradesco - 204" value="204" />
            <Picker.Item label="Santander - 033" value="033" />
            <Picker.Item label="Itaú - 341" value="341" />
          </Picker>
        </InputContainer>
        <Input
          placeholder="Descrição"
          value={description}
          onChangeText={description => {
            setDescription(description);
          }}
        />
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

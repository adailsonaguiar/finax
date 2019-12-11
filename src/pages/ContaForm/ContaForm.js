import React, {useState} from 'react';
import {StatusBar, ActivityIndicator, Alert} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';

import getRealm from './../../services/realm';

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
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState('');
  const [account, setAccount] = useState('');
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(false);

  const setIconAccount = code => {
    setIcon(contas[code].icon);
  };

  const setPropertyAccount = code => {
    console.log(account);
    setAccount(code);
    setDescription(contas[code].description);
    setIconAccount(code);
  };

  const getId = async () => {
    const realm = await getRealm();
    return realm.objects('contas').max('id') + 1;
  };

  const getDate = () => {
    const date = new Date();
    const day =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month =
      date.getMonth() < 10
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`;
    return `${day}/${month}/${date.getFullYear()}`;
  };

  const formatBalance = balance => {
    const patternParse = balance
      .replace('.', '')
      .replace(',', '.')
      .substr(2);
    return `${Number.parseFloat(patternParse * 100)}`;
  };

  const resetForm = () => {
    setDescription('');
    setBalance('');
    setAccount('');
    setIcon('');
  };

  const saveAccount = async account => {
    setLoading(true);
    const realm = await getRealm();
    try {
      realm.write(() => {
        realm.create('contas', account);
        setLoading(false);
        resetForm();
        navigation.goBack();
      });
    } catch (e) {
      return e;
    }

    return account;
  };

  const validateForm = () => {
    if (description.length == 0) {
      Alert.alert('Atenção', 'Digite uma descrição!');
      return false;
    }
    if (balance.length == 0) {
      Alert.alert('Atenção', 'Preencha o saldo da conta!');
      return false;
    }
    return true;
  };

  const setObject = async () => {
    let id = await getId();
    if (isNaN(id)) {
      id = 1;
    }
    if (validateForm()) {
      const data = {
        id,
        atualizacao: getDate(),
        description,
        balance: formatBalance(balance),
        account,
      };
      saveAccount(data);
    }
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
            selectedValue={account}
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
            value={balance}
            onChangeText={balance => {
              setBalance(balance);
            }}
            style={styles.input}
          />
        </InputContainer>
      </Form>
      <BtnNovaConta
        disabled={loading}
        activeOpacity={0.9}
        onPress={() => setObject()}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <TxtNovaConta>SALVAR</TxtNovaConta>
        )}
      </BtnNovaConta>
    </Container>
  );
}

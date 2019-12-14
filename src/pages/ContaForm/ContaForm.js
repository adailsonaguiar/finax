import React, {useState, useEffect} from 'react';
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
  LabelBtn,
  styles,
  Picker,
  ImgConta,
  ContainerIcon,
  BtnRemove,
  LabelBtnRemove,
  ContainerFormFooter,
} from './styles';

export default function ContaForm({navigation}) {
  const {state} = navigation;
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
  const [id, setId] = useState(-1);
  const [isEdition, setEdit] = useState(false);

  useEffect(() => {
    const getAccountEdit = () => {
      if (state.params) {
        setId(state.params.conta.id);
        setDescription(state.params.conta.description);
        setBalance(state.params.conta.balance);
        setAccount(state.params.conta.account);
        setEdit(true);
      }
    };
    getAccountEdit();
  }, []);

  const setIconAccount = code => {
    setIcon(contas[code].icon);
  };

  const setPropertyAccount = code => {
    setAccount(code);
    setDescription(contas[code].description);
    setIconAccount(code);
  };

  const getId = async () => {
    if (id == -1) {
      const realm = await getRealm();
      return realm.objects('contas').max('id') + 1;
    }
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
    const removedChar = balance
      .substr(2)
      .replace('.', '')
      .replace(',', '.');
    const patternParse = parseFloat(removedChar) * 100;
    return `${patternParse}`;
  };

  const resetForm = () => {
    setId(-1);
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
        realm.create('contas', account, true);
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
    setId(await getId());
    if (isNaN(id)) {
      setId(1);
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

  const askDelection = async () => {
    Alert.alert(
      'Atenção',
      'Deseja realmente deletar essa conta?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: {backgroundColor: 'red'},
        },
        {
          text: 'Sim',
          onPress: () => {
            deleteAccount();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const deleteAccount = async () => {
    setLoading(true);
    const realm = await getRealm();
    /*    const data = {
      id,
      atualizacao: getDate(),
      description,
      balance: balance,
      account,
    }; */
    console.log(id);
    try {
      realm.write(() => {
        realm.delete(realm.objectForPrimaryKey('contas', id));
        setLoading(false);
        navigation.goBack();
      });
    } catch (e) {
      setLoading(false);
      Alert.alert('Erro', `Ocorreu um erro, tente novamente. ${e}`);
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
      {isEdition ? (
        <ContainerFormFooter>
          <BtnRemove onPress={() => askDelection()}>
            <LabelBtnRemove>Deletar Conta</LabelBtnRemove>
          </BtnRemove>
        </ContainerFormFooter>
      ) : (
        <></>
      )}
      <BtnNovaConta
        disabled={loading}
        activeOpacity={0.9}
        onPress={() => setObject()}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <LabelBtn>SALVAR</LabelBtn>
        )}
      </BtnNovaConta>
    </Container>
  );
}

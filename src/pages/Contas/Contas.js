import React, {useState, useEffect} from 'react';
import {StatusBar, FlatList} from 'react-native';
import Header from '../../components/Header';
import accountsUtil from '../../utils/accounts';
import getRealm from './../../services/realm';

import Notification from '../../services/Notification';
import OneSignal from 'react-native-onesignal';

import {
  Container,
  HerderList,
  TitleComponent,
  TxtDate,
  Conta,
  Icon,
  TitleConta,
  CategoryConta,
  ColLeft,
  ColRight,
  Saldo,
  Atualizado,
  Lista,
  Footer,
  SaldoTotal,
  BtnNovaConta,
  TxtNovaConta,
} from './styles';

const Contas = ({navigation}) => {
  const [arrayAccounts] = useState(accountsUtil);
  const [accounts, setAccounts] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [monthParent, setMonthParent] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  useEffect(() => {
    loadAccounts();
    getDate();
    sumTotalValue();

    OneSignal.init('9bda8b10-9cdb-4b61-81ca-0cae03856b68');
    OneSignal.addEventListener('received', receivedPush());
    OneSignal.addEventListener('opened', openedPush());
    OneSignal.addEventListener('ids', idsPush());
  }, []);

  const getDate = () => {
    const date = new Date();
    const day =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month =
      date.getMonth() < 10
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`;
    setCurrentDate(`${day}/${month}/${date.getFullYear()}`);
  };

  function receivedPush(push) {
    console.log('received Push', push);
  }
  function openedPush(push) {
    console.log('Opened Push', push);
  }

  function idsPush(push) {
    console.log('IDS Push', push);
  }

  async function loadAccounts() {
    const realm = await getRealm();
    const data = realm.objects('contas').sorted('id', 1);
    setAccounts(data);
  }

  const sumTotalValue = () => {
    let sumValue = 0;
    accounts.forEach(account => {
      sumValue += account.balance;
    });
    setTotalValue(formatMoney(sumValue));
  };

  const formatMoney = value => {
    let amount = value / 100;
    let decimalCount = 2;
    let decimal = ',';
    let thousands = '.';
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

      const negativeSign = amount < 0 ? '-' : '';

      let i = parseInt(
        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
      ).toString();
      let j = i.length > 3 ? i.length % 3 : 0;

      return (
        negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
        (decimalCount
          ? decimal +
            Math.abs(amount - i)
              .toFixed(decimalCount)
              .slice(2)
          : '')
      );
    } catch (e) {
      console.log(e);
    }
  };

  const log = () => {
    Notification.configure().localNotificationSchedule({
      message: 'Olá,tudo bem?',
      date: new Date(Date.now() + 3000),
    });
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Header title="Dezembro" />
      <HerderList>
        <TitleComponent>SUAS CONTAS</TitleComponent>
        <TxtDate>{currentDate}</TxtDate>
      </HerderList>
      <Lista>
        <FlatList
          data={accounts}
          renderItem={({item}) => (
            <Conta
              onPress={() => {
                navigation.navigate('ContaForm', {
                  account: item,
                  loadAccounts: loadAccounts,
                });
              }}>
              <Icon source={arrayAccounts[item.account].icon} />
              <ColLeft>
                <TitleConta>{arrayAccounts[item.account].label}</TitleConta>
                <CategoryConta>{item.description}</CategoryConta>
              </ColLeft>
              <ColRight>
                <Saldo>R${`${formatMoney(item.balance)}`}</Saldo>
                <Atualizado>{item.atualizacao}</Atualizado>
              </ColRight>
            </Conta>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </Lista>
      <Footer>
        <SaldoTotal>Saldo das contas: R$ {totalValue}</SaldoTotal>
        <BtnNovaConta
          onPress={() => {
            /* navigation.navigate('ContaForm', {
              loadAccounts: loadAccounts,
            }); */
            log();
          }}>
          <TxtNovaConta>Adicionar Conta</TxtNovaConta>
        </BtnNovaConta>
      </Footer>
    </Container>
  );
};

export default Contas;

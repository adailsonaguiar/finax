import React, {useState, useEffect} from 'react';
import {StatusBar, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import accountsUtil from '../../utils/accounts';
import {useDispatch, useSelector} from 'react-redux';
import {loadAccounts} from '../../store/accounts/actions';
import {setTwoDigits} from '../../utils/FunctionUtils';

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

const Carteiras = ({navigation}) => {
  const [arrayAccounts] = useState(accountsUtil);
  const [currentDate, setCurrentDate] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const dispatch = useDispatch();
  const accounts = useSelector(state => state.accounts.accounts);

  useEffect(() => {
    getDate();
    sumTotalValue();
  }, []);

  const getDate = () => {
    const date = new Date();
    const day = setTwoDigits(date.getDate());
    const month = setTwoDigits(date.getMonth() + 1);
    setMonth(month);
    setYear(`${date.getFullYear()}`);
    setCurrentDate(`${day}/${month}/${date.getFullYear()}`);
    dispatch(loadAccounts(month, year));
  };

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
                });
              }}>
              <Icon source={arrayAccounts[item.account].icon} />
              <ColLeft>
                <TitleConta>{arrayAccounts[item.account].label}</TitleConta>
                <CategoryConta>{item.description}</CategoryConta>
              </ColLeft>
              <ColRight>
                <Saldo>R${`${formatMoney(item.balance)}`}</Saldo>
                <Atualizado>{`${item.day}/${item.month}/${item.year}`}</Atualizado>
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
            navigation.navigate('ContaForm', {});
          }}>
          <TxtNovaConta>Adicionar Conta</TxtNovaConta>
        </BtnNovaConta>
      </Footer>
    </Container>
  );
};

export default Carteiras;

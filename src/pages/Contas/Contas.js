import React, {useState, useEffect} from 'react';
import {StatusBar, FlatList} from 'react-native';
import Header from '../../components/Header/Header';
import accountsUtil from '../../utils/accounts';
import getRealm from './../../services/realm';

import {
  Container,
  HerderList,
  TitleComponent,
  Date,
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
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    loadAccounts();
  }, []);

  async function loadAccounts() {
    const realm = await getRealm();
    const data = realm.objects('contas').sorted('id', 1);
    setAccounts(data);
  }

  function getIcon(account) {
    return arrayAccounts[account.account].icon;
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Header title="Dezembro" />
      <HerderList>
        <TitleComponent>SUAS CONTAS</TitleComponent>
        <Date>22/12/2019</Date>
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
              <Icon source={getIcon(item)} />
              <ColLeft>
                <TitleConta>{item.account}</TitleConta>
                <CategoryConta>{item.description}</CategoryConta>
              </ColLeft>
              <ColRight>
                <Saldo>
                  R${`${(Number.parseFloat(item.balance) / 100).toFixed(2)}`}
                </Saldo>
                <Atualizado>{item.atualizacao}</Atualizado>
              </ColRight>
            </Conta>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </Lista>
      <Footer>
        <SaldoTotal>Saldo das contas: R$ 16.241,71</SaldoTotal>
        <BtnNovaConta
          onPress={() => {
            navigation.navigate('ContaForm', {
              loadAccounts: loadAccounts,
            });
          }}>
          <TxtNovaConta>Adicionar Conta</TxtNovaConta>
        </BtnNovaConta>
      </Footer>
    </Container>
  );
};

export default Carteiras;

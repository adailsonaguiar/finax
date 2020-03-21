import React, {useState} from 'react';
import {Text, View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import Tabs from '../../components/Tabs';

import {Container, CompHead, TitleGrid, TxtSaldo, TxtDescricao} from './styles';

import {
  Transacao,
  RowTransacao,
  ValorTransacao,
  DetalhesTransacao,
  TitleTransacao,
} from '../../components/TransacaoStyles';

export default Dash = () => {
  const [transactions, setTransactions] = useState([]);

  return (
    <Container>
      <Header title="Finax" />
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <CompHead>
        <TxtDescricao>Saldo Receitas</TxtDescricao>
        <TxtSaldo>R$ 9.857,96</TxtSaldo>
        <Tabs />
      </CompHead>
      <TitleGrid>HISTÓRICO</TitleGrid>
      <ScrollView>
        {transactions.map(despesa => (
          <Transacao key={despesa.id}>
            <RowTransacao>
              <TitleTransacao>{despesa.description}</TitleTransacao>
              <ValorTransacao>{despesa.value}</ValorTransacao>
            </RowTransacao>
            <RowTransacao>
              <View>
                <DetalhesTransacao>{despesa.category}</DetalhesTransacao>
              </View>
              <View>
                <DetalhesTransacao>{despesa.date}</DetalhesTransacao>
              </View>
              <Text>{despesa.status}</Text>
            </RowTransacao>
          </Transacao>
        ))}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  stackBar: {
    backgroundColor: '#f39c12ff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20,
  },
  stackBar_start: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
  },
  stackBar_end: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
  },
  txtStack: {
    color: '#fff',
    alignSelf: 'flex-end',
  },

  txtSaldo: {
    color: '#f39c12ff',
    fontWeight: '500',
    fontSize: 25,
  },
  txtDescricao: {
    color: '#f39c12ff',
    fontWeight: '500',
    fontSize: 15,
  },
  cardGeral: {
    backgroundColor: 'white',
    height: 130,
    margin: 10,
    borderRadius: 17,
    padding: 20,
  },
  viewRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  viewRowDescription: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start',
  },
});

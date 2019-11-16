import React from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { Container, CompHead } from './styles';

const Home = () => {
  return (
    <Container>
      <Header title='Agosto' />
      <StatusBar barStyle='light-content' backgroundColor='#f39c12ff' />
      <CompHead>
        <Text style={styles.txtSaldo}>R$ 9.857,96</Text>
        <Text style={styles.txtDescricao}>Saldo Receitas</Text>
      </CompHead>
      <ScrollView>
        <View style={styles.cardGeral}>
          <View>
            <Text>VISÃO GERAL</Text>
          </View>
          <View style={styles.viewRow}>
            <View style={styles.stackBar_start}>
              <Text style={styles.txtIntro}>Receitas</Text>
            </View>
            <View style={styles.stackBar_end}>
              <Text style={{ color: '#3498dbff' }}>R$ 3.616,66</Text>
            </View>
          </View>
          <View style={styles.viewRow}>
            <View style={styles.stackBar_start}>
              <Text style={styles.txtIntro}>Despesas</Text>
            </View>
            <View style={styles.stackBar_end}>
              <Text style={{ color: '#f39c12ff' }}>R$ 342,32</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardGeral}>
          <View>
            <Text>ECONOMIA DO MÊS</Text>
          </View>
          <View style={styles.viewRow}>
            <View style={styles.stackBar_start}>
              <Text style={styles.txtIntro}>Gráfico</Text>
            </View>
            <View style={styles.stackBar_end}>
              <Text style={{ color: '#2ecc71ff', fontSize: 20 }}>asd</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardGeral} />
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  stackBar: {
    backgroundColor: '#f39c12ff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 20,
    paddingEnd: 20
  },
  stackBar_start: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start'
  },
  stackBar_end: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end'
  },
  txtStack: {
    color: '#fff',
    alignSelf: 'flex-end'
  },

  txtSaldo: {
    color: 'white',
    fontWeight: '500',
    fontSize: 25
  },
  txtDescricao: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15
  },
  cardGeral: {
    backgroundColor: 'white',
    height: 200,
    margin: 10,
    borderRadius: 17,
    padding: 20
  },
  viewRow: {
    flexDirection: 'row',
    marginTop: 20
  },
  viewRowDescription: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-start'
  }
});

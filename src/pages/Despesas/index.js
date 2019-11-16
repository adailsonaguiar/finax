import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import Header from '../../components/Header';
import { Container } from './styles';

const Despesas = ({ navigation }) => {
  return (
    <Container>
      <Header title='Despesas' />
      <View style={styles.cardHeader}>
        <View style={styles.row}>
          <Text style={styles.vwMes}>Outubro </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text>Total pago</Text>
            <Text style={styles.vlrPago}>R$ 342,32</Text>
          </View>
          <View style={styles.col}>
            <Text>Total pendente</Text>
            <Text style={styles.vlrPendente}>R$ 342,32</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <ScrollView>
          <View style={styles.despesa}>
            <View style={styles.rowDespesa}>
              <Text style={styles.txtIntro}>Churrascaria flor do nordeste</Text>
              <Text style={styles.valorDespesa}>R$ 342,32</Text>
            </View>
            <View style={styles.rowDespesa}>
              <View style={styles.observacao}>
                <Text style={styles.detalhesDespesa}>Alimentação</Text>
              </View>
              <View style={styles.observacao}>
                <Text style={styles.detalhesDespesa}>30/10/2019</Text>
              </View>
              <Text style={styles.detalhesDespesa}>Pago</Text>
              <Button
                onPress={() => navigation.navigate('NovaDespesa')}
                title='Nova'
              />
            </View>
          </View>
          <View style={styles.despesa}>
            <View style={styles.rowDespesa}>
              <Text style={styles.txtIntro}>Churrascaria flor do nordeste</Text>
              <Text style={styles.valorDespesa}>R$ 342,32</Text>
            </View>
            <View style={styles.rowDespesa}>
              <View style={styles.observacao}>
                <Text style={styles.detalhesDespesa}>Alimentação</Text>
              </View>
              <View style={styles.observacao}>
                <Text style={styles.detalhesDespesa}>30/10/2019</Text>
              </View>
              <Text style={styles.detalhesDespesa}>Pago</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

export default Despesas;

const styles = StyleSheet.create({
  cardHeader: {
    backgroundColor: 'white',
    height: 100,
    margin: 10,
    borderRadius: 14,
    padding: 20,
    flexDirection: 'column'
  },
  col: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderBottomColor: '#5c5151'
  },
  vlrPago: {
    fontSize: 14,
    color: '#3498dbff'
  },
  vlrPendente: {
    fontSize: 14,
    color: '#f39c12ff'
  },
  vwMes: {
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: 'white',
    height: 265,
    margin: 10,
    borderRadius: 14,
    padding: 10,
    flexDirection: 'column'
  },
  despesa: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  observacao: {
    width: 60
  },
  rowDespesa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomColor: '#5c5151'
  },
  detalhesDespesa: {
    fontSize: 10,
    color: '#8a8a8a'
  },
  valorDespesa: {
    color: '#eb5454'
  }
});

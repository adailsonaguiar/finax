import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';

const Despesas = () => {
  return (
    <View style={styles.container}>
      <Header title="Despesas" />
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
          <View style={styles.rowDespesa}>
            <View style={styles.row}>
              <Text style={styles.txtIntro}>Churrascaria flor do nordeste</Text>
              <Text style={{ color: '#f39c12ff' }}>R$ 342,32</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.observacao}>
                <Text style={{ fontSize: 10 }}>Alimentação</Text>
              </View>
              <View style={styles.observacao}>
                <Text style={{ fontSize: 10 }}>30/10/2019</Text>
              </View>
              <Text style={{ fontSize: 10 }}>Pago</Text>
            </View>
          </View>
          <View style={styles.rowDespesa}>
            <View style={styles.row}>
              <Text style={styles.txtIntro}>Churrascaria flor do nordeste</Text>
              <Text style={{ color: '#f39c12ff' }}>R$ 342,32</Text>
            </View>
            <View style={styles.row}>
              <View style={styles.observacao}>
                <Text style={{ fontSize: 10 }}>Alimentação llkas</Text>
              </View>
              <View style={styles.observacao}>
                <Text style={{ fontSize: 10 }}>30/10/2019</Text>
              </View>
              <Text style={{ fontSize: 10 }}>Pago</Text>
            </View>
          </View>
          {/* <View style={styles.rowDespesa}>
            <View style={styles.col}>
              <Text style={styles.txtIntro}>Churrascaria flor do nordeste</Text>
              <Text style={{ fontSize: 10 }}>Alimentação</Text>
            </View>
            <View style={styles.col}>
              <Text style={{ color: '#f39c12ff' }}>R$ 342,32</Text>
              <Text style={{ fontSize: 10 }}>Pago</Text>
            </View>
          </View>
          <View style={styles.rowDespesa}>
            <View style={styles.col}>
              <Text style={styles.txtIntro}>Churrascaria flor do nordeste</Text>
              <Text style={{ fontSize: 10 }}>Alimentação</Text>
            </View>
            <View style={styles.col}>
              <Text style={{ color: '#f39c12ff' }}>R$ 342,32</Text>
              <Text style={{ fontSize: 10 }}>Pago</Text>
            </View>
          </View>
          <View style={styles.rowDespesa}>
            <View style={styles.col}>
              <Text style={styles.txtIntro}>Churrascaria flor do nordeste</Text>
              <Text style={{ fontSize: 10 }}>Alimentação</Text>
            </View>
            <View style={styles.col}>
              <Text style={{ color: '#f39c12ff' }}>R$ 342,32</Text>
              <Text style={{ fontSize: 10 }}>Pago</Text>
            </View>
          </View> */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Despesas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2ff',
    flex: 1
  },
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
    justifyContent: 'space-between',
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
  rowDespesa: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  observacao: {
    width: 60
  }
});

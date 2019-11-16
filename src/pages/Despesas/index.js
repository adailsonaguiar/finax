import React, { useState } from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import Header from '../../components/Header';
import {
  Container,
  TitleGrid,
  Grid,
  CardHeader,
  Col,
  Row,
  TotalPago,
  TotalPendente
} from './styles';
import {
  Transacao,
  RowTransacao,
  ValorTransacao,
  DetalhesTransacao,
  TitleTransacao
} from './../../components/TransacaoStyles';

const Despesas = ({ navigation }) => {
  const [despesas, setDespesas] = useState([
    {
      title: 'Churrascaria Norte Sul',
      value: 50.22,
      date: '23/11/2019',
      category: 'Alimentação',
      status: 'pago',
      id: 1
    },
    {
      title: 'Serra verde - óleo moto',
      value: 29,
      date: '24/11/2019',
      category: 'Veículo',
      status: 'pendente',
      id: 2
    },
    {
      title: 'Big Lanches',
      value: 15.43,
      date: '10/11/2019',
      category: 'Alimentação',
      status: 'pago',
      id: 4
    }
  ]);

  const cadastrarDespesa = () => {
    setDespesas(value => [
      ...value,
      {
        title: 'Big Lanches',
        value: 15.43,
        date: '10/11/2019',
        category: 'Alimentação',
        status: 'pago'
      }
    ]);
    console.log(despesas);
  };

  return (
    <Container>
      <Header title='Despesas' />
      <Button onPress={cadastrarDespesa} title='Nova' />
      <CardHeader>
        <Row>
          <Text>Outubro </Text>
        </Row>
        <Row>
          <Col>
            <Text>Total pago</Text>
            <TotalPago>R$ 342,32</TotalPago>
          </Col>
          <Col>
            <Text>Total pendente</Text>
            <TotalPendente>R$ 342,32</TotalPendente>
          </Col>
        </Row>
      </CardHeader>
      <Grid>
        <TitleGrid>Suas Despesas</TitleGrid>
        <ScrollView>
          {despesas.map(despesa => (
            <Transacao key={despesa.id}>
              <RowTransacao>
                <TitleTransacao>{despesa.title}</TitleTransacao>
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
      </Grid>
    </Container>
  );
};

export default Despesas;

import React, {useState} from 'react';
import {StatusBar, FlatList, TouchableOpacity} from 'react-native';
import Header from '../../components/Header/Header';
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

const bbicon = require('../../assets/contas/bbicon.png');
const ricoicon = require('../../assets/contas/ricoicon.png');
const nuicon = require('../../assets/contas/nuicon.png');

const Carteiras = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Nuconta',
      icon: nuicon,
      category: 'Poupança',
      saldo: 'R$4.690,59',
      atualizado: 'Atualizado: 10 Dez',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Conta BB',
      icon: bbicon,
      category: 'Conta Corrente',
      saldo: 'R$1.100,90',
      atualizado: 'Atualizado: 10 Dez',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rico',
      icon: ricoicon,
      category: 'Investimento',
      saldo: 'R$10.450,22',
      atualizado: 'Atualizado: 22 NOV',
    },
  ]);

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
          data={data}
          renderItem={({item}) => (
            <Conta>
              <Icon source={item.icon} />
              <ColLeft>
                <TitleConta>{item.title}</TitleConta>
                <CategoryConta>{item.title}</CategoryConta>
              </ColLeft>
              <ColRight>
                <Saldo>{item.saldo}</Saldo>
                <Atualizado>{item.atualizado}</Atualizado>
              </ColRight>
            </Conta>
          )}
        />
      </Lista>
      <Footer>
        <SaldoTotal>Saldo das contas: R$ 16.241,71</SaldoTotal>
        <BtnNovaConta onPress={() => navigation.navigate('ContaForm')}>
          <TxtNovaConta>Adicionar Conta</TxtNovaConta>
        </BtnNovaConta>
      </Footer>
      {/*       <Button onPress={() => navigation.navigate('NovaDespesa')} title="Nova" />
       */}
    </Container>
  );
};

export default Carteiras;

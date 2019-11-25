import React from 'react';
import {Text, View, Button} from 'react-native';
import Header from '../../components/Header';

const Carteiras = ({navigation}) => {
  return (
    <View>
      <Header title="Carteiras" />
      <Text>Tela Carteiras</Text>
      <Button onPress={() => navigation.navigate('NovaDespesa')} title="Nova" />
    </View>
  );
};

export default Carteiras;

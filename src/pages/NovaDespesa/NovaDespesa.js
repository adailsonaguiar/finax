import React from 'react';
import { Button } from 'react-native';

import { Container } from './styles';

export default NovaDespesa = ({ navigation }) => {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Despesas')} title='Despesas' />
    </Container>
  );
};

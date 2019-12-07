import React from 'react';
import {StatusBar} from 'react-native';

import {
  Container,
  TxtHeaderForm,
  HeaderForm,
  BtnFechar,
  TxtBtnFechar,
  Form,
} from './styles';

export default function ContaForm({navigation}) {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
      <HeaderForm>
        <TxtHeaderForm>NOVA CONTA</TxtHeaderForm>
        <BtnFechar onPress={() => navigation.goBack()}>
          <TxtBtnFechar>X</TxtBtnFechar>
        </BtnFechar>
      </HeaderForm>
      <Form></Form>
    </Container>
  );
}

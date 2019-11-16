import React, { useState } from 'react';
import { Button, Picker } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import { Container, InputContainer } from './styles';

export default NovaDespesa = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);

  return (
    <Container>
      <TextInput />
      <InputContainer>
        <TextInput
          style={{
            height: 45,
            fontSize: 17,
            paddingLeft: 15,
            paddingRight: 15
          }}
          placeholder='Descrição'
        />
      </InputContainer>
      <InputContainer>
        <TextInput
          style={{
            height: 45,
            fontSize: 17,
            paddingLeft: 15,
            paddingRight: 15
          }}
          placeholder='Data'
        />
      </InputContainer>

      <InputContainer>
        <Picker
          selectedValue={category}
          onValueChange={selected => setCategory(selected)}
        >
          <Picker.Item label='Alimentação' value='Alimentação' />
          <Picker.Item label='Veículo' value='Veículo' />
          <Picker.Item label='Farmácia' value='Farmácia' />
          <Picker.Item label='Contas Fixas' value='Contas Fixas' />
          <Picker.Item label='Lazer' value='Lazer' />
          <Picker.Item label='Saúde' value='Saúde' />
        </Picker>
      </InputContainer>
      <InputContainer>
        <TextInputMask
          type={'money'}
          value={value}
          style={{ paddingLeft: 15, fontWeight: 'bold', fontSize: 17 }}
          onChangeText={value => {
            setValue(value);
          }}
        />
      </InputContainer>
      <Button
        onPress={() => navigation.navigate('Despesas')}
        title='Despesas'
      />
    </Container>
  );
};

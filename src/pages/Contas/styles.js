import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #121212;
`;
export const HerderList = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 10px;
`;
export const TitleComponent = styled.Text`
  color: #e1e1e1;
  font-size: 30px;
  font-family: Roboto-Bold;
`;
export const Date = styled.Text`
  color: #95a5a6;
  font-size: 12px;
  font-family: Roboto-Medium;
`;
export const Lista = styled.View`
  flex: 5;
`;
export const Conta = styled.TouchableOpacity`
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #1d1d1d;
  height: 70px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
export const Icon = styled.Image`
  width: 55px;
  height: 55px;
`;
export const ColLeft = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  flex: 2;
`;
export const TitleConta = styled.Text`
  color: #e1e1e1;
  font-size: 19px;
  font-family: Roboto-Bold;
`;
export const CategoryConta = styled.Text`
  color: #444359;
  font-family: Roboto-Medium;
`;
export const ColRight = styled.View`
  flex-direction: column;
  align-items: flex-end;
  flex: 2;
`;
export const Saldo = styled.Text`
  color: #e1e1e1;
  font-size: 19px;
  font-family: Roboto-Bold;
`;
export const Atualizado = styled.Text`
  color: #444359;
  font-family: Roboto-Medium;
`;
export const Footer = styled.View`
  background: #191919;
  height: 61px;
  align-items: center;
  padding-left: 20px;
  flex-direction: row;
`;
export const SaldoTotal = styled.Text`
  color: #e1e1e1;
  flex: 3;
  font-family: Roboto-Medium;
`;
export const BtnNovaConta = styled.TouchableOpacity`
  background: #282828;
  border-radius: 10px;
  flex: 2;
  height: 47px;
  width: 110px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
export const TxtNovaConta = styled.Text`
  color: #e1e1e1;
  font-family: Roboto-Bold;
`;

import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundForm};
`;
export const HeaderForm = styled.View`
  flex: 1;
  background: ${colors.backgroundForm};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
`;
export const TxtHeaderForm = styled.Text`
  color: ${colors.fontLight};
  font-size: 30px;
  font-family: Roboto-Bold;
`;
export const BtnFechar = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  align-items: flex-end;
`;
export const TxtBtnFechar = styled.Text`
  color: ${colors.fontLight};
  font-size: 25px;
`;
export const Form = styled.View`
  justify-content: flex-start;
  flex: 7;
`;
export const InputContainer = styled.View`
  justify-content: center;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #383642;
  height: 45px;
  margin-left: 30px;
  margin-right: 30px;
`;
export const ButtonContainer = styled.View`
  justify-content: center;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #f2f2f2;
  background: #fff;
`;
export const LabelButton = styled.Text`
  color: #f39c12ff;
  font-size: 14px;
  font-weight: bold;
`;
export const Picker = styled.Picker`
  margin-bottom: 20px;
  color: #95a5a6;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#95a5a6',
})`
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #383642;
  height: 45px;
  margin-left: 30px;
  margin-right: 30px;
  color: white;
  font-size: 17px;
`;
export const BtnNovaConta = styled.TouchableOpacity`
  background: #03dac5;
  height: 61px;
  align-items: center;
  justify-content: center;
`;
export const TxtNovaConta = styled.Text`
  color: ${colors.fontLight};
  font-family: Roboto-Bold;
  font-size: 18px;
`;
export const ImgConta = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ContainerIcon = styled.View`
  flex: 3;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
`;

export const styles = StyleSheet.create({
  input: {color: 'white', fontSize: 17},
});

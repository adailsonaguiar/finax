import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Form = styled.View`
  flex: 1;
  justify-content: center;
  background: ${props => props.theme.theme.background};
`;
export const InputContainer = styled.View`
  justify-content: center;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
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

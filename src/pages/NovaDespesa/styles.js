import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
export const InputContainer = styled.View`
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 24px;
  height: 45px;
  margin-left: 30px;
  margin-right: 30px;
`;
export const ButtonContainer = styled.View`
  justify-content: center;
  margin-bottom: 20px;
  background: ${props => props.theme.theme.background};
  border: 1px solid #f39c12ff;
  border-radius: 24px;
  height: 45px;
  margin-left: 50px;
  margin-right: 50px;
  justify-content: center;
  align-items: center;
`;
export const LabelButton = styled.Text`
  color: ${props => props.theme.theme.color};
  font-size: 14px;
  font-weight: bold;
`;

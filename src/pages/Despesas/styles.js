import styled from 'styled-components/native';

export const Container = styled.View`
  background: white;
  flex: 1;
`;
export const TitleGrid = styled.Text`
  color: #000;
  font-size: 20px;
  margin-left: 10px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const Grid = styled.View`
  flex-direction: column;
`;

export const CardHeader = styled.View`
  height: 90px;
  margin: 10px;
  border-radius: 5px;
  padding: 20px;
  flex-direction: column;
  background: white;
`;
export const Col = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
  border-bottom-color: #5c5151;
`;
export const TotalPago = styled.Text`
  font-size: 14px;
  color: #3498dbff;
`;
export const TotalPendente = styled.Text`
  font-size: 14px;
  color: #f39c12ff;
`;

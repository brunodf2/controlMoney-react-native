import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  padding: 10px;
`;

export const Picker = styled.Picker``;

export const SubmitButton = styled(RectButton)`
  margin-top: 13px;
  align-self: stretch;
  border-radius: 4px;
  background: blue;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const CancelButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: blue;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const CancelButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

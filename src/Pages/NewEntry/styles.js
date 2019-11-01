import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {RectButton, BaseButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  display: flex;
  flex: 1;
  padding: 10px;
  align-items: stretch;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #000;
`;

export const GpsButton = styled.TouchableHighlight`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: blue;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const CameraButton = styled.TouchableHighlight`
  padding: 20px 10px;
  margin-top: 10px;
  align-self: center;
  border-radius: 200px;
  background: blue;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const SubmitButton = styled.TouchableHighlight`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: blue;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const CancelButton = styled.TouchableHighlight`
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

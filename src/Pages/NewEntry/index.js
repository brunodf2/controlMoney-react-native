import React from 'react';
import {Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  Input,
  GpsButton,
  CameraButton,
  SubmitButton,
  CancelButton,
  SubmitButtonText,
  CancelButtonText,
} from './styles';

const NewEntry = ({navigation}) => {
  const currenteBalance = 2065.44

  return (
    <Container>
      <BalanceLabel currenteBalance={currenteBalance} />

      <Form>
        <Input placeholder="Adicionar" />
      </Form>
      <Form>
        <Input placeholder="Adicionar" />
      </Form>

      <GpsButton>
        <Icon name="location-on" size={30} color="#fff" />
      </GpsButton>
      <CameraButton>
        <Icon name="camera-alt" size={30} color="#fff" />
      </CameraButton>

      <SubmitButton>
        <SubmitButtonText>Adicionar</SubmitButtonText>
      </SubmitButton>
      <CancelButton onPress={() => navigation.navigate('Main')}>
        <CancelButtonText>Cancelar</CancelButtonText>
      </CancelButton>
      {/* <Button title="cancelar" onPress={() => navigation.goBack()} /> */}
    </Container>
  );
};

export default NewEntry;

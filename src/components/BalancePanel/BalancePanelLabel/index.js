import React from 'react';
// import {View, Text} from 'react-native';

import {Container, Text, Saldo} from './styles';

export default function BalancePanelLabel() {
  return (
    <Container>
      <Text>Saldo atual</Text>
      <Saldo>$2.102,45</Saldo>
    </Container>
  );
}

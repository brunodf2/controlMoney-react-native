import React from 'react';
// import {View, Text} from 'react-native';

import {Container, Text, Saldo} from './styles';

export default function BalancePanelLabel({currentBalance}) {
  return (
    <Container>
      <Text>Saldo atual</Text>
      <Saldo>{currentBalance}</Saldo>
    </Container>
  );
}

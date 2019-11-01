import React from 'react';

import {Container, Text, Value} from './styles';

export default function BalanceLabel({currentBalance}) {
  return (
    <Container>
      <Text>Saldo Atual</Text>
      <Value>{currentBalance}</Value>
    </Container>
  );
}

import React from 'react';
// import {View, Button} from 'react-native';

import {Container, Button} from './styles';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel() {
  return (
    <Container>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button title="Adicionar" />
    </Container>
  );
}

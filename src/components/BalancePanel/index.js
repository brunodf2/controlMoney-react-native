import React from 'react';
// import {View, Button} from 'react-native';

import {Container, Button} from './styles';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

export default function BalancePanel({currentBalance}) {
  return (
    <Container>
      <BalancePanelLabel currentBalance={currentBalance} />
      <BalancePanelChart />
    </Container>
  );
}

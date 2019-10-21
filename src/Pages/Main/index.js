import React from 'react';
// import {View, Text} from 'react-native';

import {Container, Text} from './styles';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

import EntryList from '../../components/EntryList';

const Main = () => {
  return (
    <Container>
      <BalancePanel />
      <EntrySummary />
      <EntryList />
    </Container>
  );
};

export default Main;

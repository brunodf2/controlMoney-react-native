import React from 'react';
// import {View, Text} from 'react-native';

import {Container, Button} from './styles';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 2065.9;

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 210},
    {key: '2', description: 'Combustivel', amount: 151},
    {key: '3', description: 'Aluguel', amount: 501},
    {key: '4', description: 'Lazer', amount: 100},
    {key: '5', description: 'Outros', amount: 200},
  ];

  const entries = [
    {key: '1', description: 'Padaria', amount: 300},
    {key: '2', description: 'Bar Barns', amount: 150},
    {key: '3', description: 'Dona Zú', amount: 120},
  ];

  return (
    <Container>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
    </Container>
  );
};

export default Main;

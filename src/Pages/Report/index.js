import React from 'react';
import {View, Picker} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {
  Container,
  SubmitButton,
  SubmitButtonText,
  CancelButton,
  CancelButtonText,
} from './styles';

export default function Report() {
  const currenteBalance = 2065.44;

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
      <BalanceLabel currenteBalance={currenteBalance} />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />

      <SubmitButton>
        <SubmitButtonText>Salvar</SubmitButtonText>
      </SubmitButton>
      <CancelButton>
        <CancelButtonText>Fechar</CancelButtonText>
      </CancelButton>
    </Container>
  );
}

import React from 'react';
// import { View } from 'react-native';

import {Container, Text, FlatList, List} from './styles';

export default function EntrySummaryList({entriesGrouped}) {
  return (
    <Container>
      <Text>Categorias</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <List>
            {item.description} - ${item.amount}
          </List>
        )}
      />
    </Container>
  );
}

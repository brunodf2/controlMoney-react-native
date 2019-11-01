import React from 'react';
// import { View } from 'react-native';

import {Container, Text, FlatList, List} from './styles';

export default function EntryListItem({entries}) {
  return (
    <Container>
      <Text>Últimos Lancamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <List>
            {item.description} - ${item.amount}
          </List>
        )}
      />
    </Container>
  );
}

import React from 'react';
// import { View } from 'react-native';

import {Container, Text, FlatList, List} from './styles';

export default function EntryListItem() {
  return (
    <Container>
      <Text>Últimos Lancamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria: $200,00'},
          {key: 'Bar Barns: $150,00'},
          {key: 'Dona Zú: $120,00'},
        ]}
        renderItem={({item}) => <List>{item.key}</List>}
      />
    </Container>
  );
}

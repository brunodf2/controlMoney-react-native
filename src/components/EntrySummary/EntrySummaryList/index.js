import React from 'react';
// import { View } from 'react-native';

import {Container, Text, FlatList, List} from './styles';

export default function EntrySummaryList() {
  return (
    <Container>
      <Text>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: $200,00'},
          {key: 'Combustivel: $150,00'},
          {key: 'Aluguel: $500,00'},
          {key: 'Lazer: $250,00'},
          {key: 'Outros: $1200,00'},
        ]}
        renderItem={({item}) => <List>{item.key}</List>}
      />
    </Container>
  );
}

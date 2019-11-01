import React from 'react';
// import { View } from 'react-native';

import {Container} from './styles';

import EntryListItem from './EntryListItem';

export default function EntryList({entries}) {
  return (
    <Container>
      <EntryListItem entries={entries} />
    </Container>
  );
}

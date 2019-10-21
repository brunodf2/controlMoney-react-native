import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

export default function EntrySummary() {
  return (
    <Container>
      <EntrySummaryChart />
      <EntrySummaryList />
    </Container>
  );
}

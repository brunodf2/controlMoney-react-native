import React from 'react';
import {View} from 'react-native';

import {Container} from './styles';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

export default function EntrySummary({entriesGrouped}) {
  return (
    <Container>
      <EntrySummaryList entriesGrouped={entriesGrouped} />
      <EntrySummaryChart />
    </Container>
  );
}

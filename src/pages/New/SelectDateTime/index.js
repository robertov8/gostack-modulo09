import React, { useState } from 'react';
import { View } from 'react-native';

import DateInput from '../../../components/DateInput';

import Background from '../../../components/Background';
import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

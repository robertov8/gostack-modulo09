import React, { useState, useEffect } from 'react';

import api from '../../../services/api';

import Background from '../../../components/Background';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState();

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
    }

    loadProviders().then();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item }) => (
            <Provider
              onPress={() => navigation.navigate('SelectDateTime', { item })}>
              <Avatar
                source={{
                  uri: item.avatar
                    ? item.avatar.url
                    : `https://api.adorable.io/avatar/50/${item.name}.png`,
                }}
              />
              <Name>{item.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

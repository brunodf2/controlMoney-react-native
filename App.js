/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  addEntry = () => {
    alert('Abrir Adicionar lançamento');
  };
  return (
    <>
      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Saldo 2.102,45
        </Text>
        <Button onPress={addEntry} title="Adicionar" />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Categorias
        </Text>

        <FlatList
          data={[
            {key: 'Alimentação: $200,00'},
            {key: 'Combustivel: $150,00'},
            {key: 'Aluguel: $500,00'},
            {key: 'Lazer: $250,00'},
            {key: 'Outros: $1200,00'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
            marginBottom: 10,
          }}>
          Últimos Lançamentos
        </Text>

        <FlatList
          data={[
            {key: 'Padaria Principal: $200,00'},
            {key: 'Barbearia Viper: $20,00'},
            {key: 'Dona Zu: $160,00'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

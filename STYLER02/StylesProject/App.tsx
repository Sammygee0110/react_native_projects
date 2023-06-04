import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <ScrollView horizontal>
          <FancyCards />
          <FancyCards />
        </ScrollView>
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
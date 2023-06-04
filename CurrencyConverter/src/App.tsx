import React, { useState } from 'react';

import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { currencyByNaira } from './constants';
import CurrencyButton from './components/CurrencyButtons';
import Snackbar from 'react-native-snackbar';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if(!inputValue){
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: '#EA7773',
        textColor: '#000000'
      })
    }

    const inputAmount = parseFloat(inputValue);
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol}${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Enter a number to convert",
        backgroundColor: '#F4BE2C',
        textColor: '#000000'
      })
    }
  }

  return (
    <>
      <StatusBar/>
      <View style = {styles.container}>
        <View style = {styles.topContainer}>
          <View style = {styles.nairaContainer}>
            <Text style = {styles.naira}>₦</Text>
            <TextInput
            maxLength={14}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount in Naira'
            />
          </View>
            {resultValue && (
              <Text style = {styles.resultText}>{resultValue}</Text>
            )}
        </View>
        <View style = {styles.bottomContainer}>
          <FlatList
          numColumns={3}
          data={currencyByNaira}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <Pressable
            style = {[styles.button, targetCurrency === item.name && styles.selected]}
            onPress={() => buttonPressed(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  nairaContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  naira: {
    fontSize: 22,
    marginRight: 4,
    fontWeight: '800',
  },
  resultText: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800'
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 2,
    margin: 12,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;

import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import type { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element =>{
  return(
    <View>
      <Image style = {styles.diceImage} source={imageUrl} />
    </View>
  )
}

const Dice2 = ({imageUrl}: DiceProps): JSX.Element =>{
  return(
    <View>
      <Image style = {styles.diceImage} source={imageUrl} />
    </View>
  )
}

export default function App(): JSX.Element {
  const [DiceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [secondDiceImage, setSecondDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    let rollNumber = Math.floor(Math.random() * 6) + 1
    switch(rollNumber){
      case 1:
        setDiceImage(DiceOne)
        break
      case 2:
        setDiceImage(DiceTwo)
        break
      case 3:
        setDiceImage(DiceThree)
        break
      case 4:
        setDiceImage(DiceFour)
        break
      case 5:
        setDiceImage(DiceFive)
        break
      case 6:
        setDiceImage(DiceSix)
        break
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  const rollDice2 = () => {
    let rollNumber = Math.floor(Math.random() * 6) + 1
    switch(rollNumber){
      case 1:
        setSecondDiceImage(DiceOne)
        break
      case 2:
        setSecondDiceImage(DiceTwo)
        break
      case 3:
        setSecondDiceImage(DiceThree)
        break
      case 4:
        setSecondDiceImage(DiceFour)
        break
      case 5:
        setSecondDiceImage(DiceFive)
        break
      case 6:
        setSecondDiceImage(DiceSix)
        break
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  const rollAll = () => {
    rollDice();
    rollDice2();
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.diceContainer}>
      <Dice imageUrl={DiceImage} />
      <Dice2 imageUrl={secondDiceImage} />
      </View>
      <Pressable
       style = {styles.diceBtn}
       onPress={rollAll}
      >
        <Text style = {styles.diceBtnTxt}>ROLL DICE</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  diceImage: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  diceContainer: {
    flexDirection: 'row'
  },
  diceBtnTxt: {
    color: '#12B0E8',
    fontSize: 22
  },
  diceBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#12B0E8',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 9
  }
})
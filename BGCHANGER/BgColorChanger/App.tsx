import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App(): JSX.Element {
  let characters = '0123456789ABCDEF'
  
  const [randomBackground, setRandomBackground] = useState('#000000')
  const [randomBackground1, setRandomBackground1] = useState('#ff0000')
  const [randomBackground2, setRandomBackground2] = useState('#000000')
  const [randomBackground3, setRandomBackground3] = useState('#000000')
  const [randomBackground4, setRandomBackground4] = useState('#ff0000')

  function generateColor(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
      hexColor += characters[Math.floor(Math.random() * 16)]
    }
    return hexColor;
  }

  function setBackground(){
    setRandomBackground(generateColor());
    setRandomBackground1(generateColor());
    setRandomBackground2(generateColor());
    setRandomBackground3(generateColor());
    setRandomBackground4(generateColor());
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground}></StatusBar>
      <View
      style = {[styles.container, {backgroundColor: randomBackground}]}
      >
        <View style = {styles.outerView1}>
        <View style = {[styles.circle, {backgroundColor: randomBackground1}]}></View>
        <View style = {[styles.triangle, {borderBottomColor: randomBackground2}]}></View>
        </View>
        <View style = {styles.outerView2}>
        <TouchableOpacity
        style = {styles.button}
        onPress={() => setBackground()}
        >
          <Text style = {styles.text}>Press Me</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.outerView3}>
          <View style = {styles.innerView1}>
          <View style = {[styles.triangle, {borderBottomColor: randomBackground3}]}></View>
          </View>
          <View style = {styles.innerView2}>
          <View style = {[styles.circle, {backgroundColor: randomBackground4}]}></View>
          </View>
        </View>
        
        
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 22,
    fontFamily: 'poppins',
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 16,
    backgroundColor: '#FF6666',
    paddingVertical: 10,
    borderRadius: 8,
    width: 130,
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
  },
  circle: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 50
  },
  outerView1:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outerView2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  outerView3:{
    flex: 1,
    flexDirection: 'row'
  },
  innerView1: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  innerView2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
})
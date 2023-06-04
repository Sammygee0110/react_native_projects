import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCards</Text>
      <View style = {styles.container}>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>

        <View style = {[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
        </View>

        <View style = {[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    cardOne: {
        backgroundColor: '#ff0000'
    },
    cardTwo: {
        backgroundColor: '#0000ff'
    },
    cardThree: {
        backgroundColor: '#00ff00'
    },
})
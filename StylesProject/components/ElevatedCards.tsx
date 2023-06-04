import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style = {styles.container}>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>while</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>you</Text>
        </View>
        <View style = {[styles.card, styles.cardElevated]}>
            <Text>scroll...</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 8
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardElevated: {
        backgroundColor: '#6329cd',
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: '#ced238',
        shadowRadius: 3,
        shadowOpacity: 0.4
    }
})
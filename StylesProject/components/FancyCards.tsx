import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card, styles.cardElevated]}>
        <Image 
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9C8a4aTMDDsEzwPogJwkqqzMQTSIHCYlZWA&usqp=CAU'}}
        style = {styles.cardImage}
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.carTitle}>Lekki</Text>
            <Text style = {styles.carLabel}>Ikoyi, Lagos</Text>
            <Text style = {styles.carDescription}>Lekki is a city in Lagos State, Nigeria. It is 
            located to the south-east of Lagos city. Lekki is a naturally formed peninsula, adjoining 
            to its west Victoria Island and Ikoyi districts of Lagos, with the Atlantic Ocean to its 
            south, Lagos Lagoon to the north, and Lekki Lagoon to its east; however, the city's 
            southeast, which ends around the western edge of Refuge Island, adjoins the eastern part of Ibeju-Lekki LGA.</Text>
            <Text style = {styles.carFooter}>24 miles away</Text>
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
    card: {
        width: 350,
        height: 385,
        marginHorizontal: 16,
        marginVertical: 12,
    },
    cardElevated: {
        backgroundColor: '#242B2E',
        borderRadius: 8,
        shadowOffset: {
            width: 1,
            height: 1
        },
        elevation: 4
    },
    cardImage: {
        height: 180,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    carTitle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    carLabel: {
        color: '#ffffff',
        fontSize: 16
    },
    carDescription: {
        color: '#ffffff',
        fontSize: 12,
        marginVertical: 8,
    },
    carFooter: {
        color: '#ffffff',
    },
})
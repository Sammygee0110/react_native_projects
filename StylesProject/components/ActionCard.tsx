import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(website: string){
        Linking.openURL(website);
    }

  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headingContainer}>
            <Text style = {styles.headerText}>What's new in Javascript?</Text>
        </View>
        <Image
        source={{uri: 'https://www.freecodecamp.org/news/content/images/2023/02/image3-1.png'}}
        style = {styles.cardImage}
        />
        <View style = {styles.bodyContainer}>
          <Text 
          numberOfLines={3}
          style = {styles.bodyText}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo ex. 
            Aspernatur provident fugit error itaque dolorem neque iure odio asperiores amet? Officia 
            consectetur nam non illum ex iste minus.
        </Text>
        </View>
        <View style = {styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://log2base2.com/dashboard/trial-videos')}
            >
                <Text style = {styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://www.sportybet.com/ng/m/my_accounts/open_bets')}
            >
                <Text style = {styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardImage: {
        height: 190,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    card: {
      height: 370,
      width: 350,
      marginHorizontal: 16,
      marginVertical: 10,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    elevatedCard: {
      elevation: 3,
      backgroundColor: '#E07C24',
      borderRadius: 6
    },
    headingContainer: {
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#ffffff',
      fontSize: 16,
    },
    bodyContainer: {
      marginHorizontal: 10,
      marginVertical: 18,
      flexShrink: 1
    },
    bodyText: {
      color: '#fff',
      fontSize: 14,
    },
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    socialLinks: {
      backgroundColor: '#fff',
      borderRadius: 6,
      paddingVertical: 5,
      paddingHorizontal: 10,
      color: '#000',
      fontWeight: 'bold'
    },
})
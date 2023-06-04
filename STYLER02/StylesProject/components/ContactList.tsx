import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView 
      scrollEnabled={false}
      style = {styles.container}
      >
        {
            contacts.map(({uid, name, status, imageUrl}) => (
            <View
            key={uid}
            style = {styles.userCard}
            >
                <Image
                style = {styles.userImage}
                source={{uri: imageUrl}}
                />
                <View>
                    <Text style = {styles.userName}>{name}</Text>
                    <Text style = {styles.userStatus}>{status}</Text>
                </View>
            </View>
            ))
        }
      </ScrollView>
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
        marginHorizontal: 16
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: '#CAD5E2',
        borderRadius: 14,
        paddingVertical: 10,
        paddingHorizontal: 7
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    userStatus: {},
})
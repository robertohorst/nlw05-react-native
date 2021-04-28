import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
 } from 'react-native';
import colors from '../styles/colors';
import userImg from '../../assets/roberto.jpg';
import fonts from '../styles/fonts';


export function Header(){
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greetings}>Olá</Text>
        <Text style={styles.name}>Roberto</Text>
      </View>

      <Image 
        style={styles.image}
        source={userImg} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  greetings: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  name: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  image: {
    height: 75,
    width: 75,
    borderRadius:36
  }
});
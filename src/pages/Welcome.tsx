import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, Platform, StatusBar } from 'react-native';

import wateringImg from '../../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome(){
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image
        style={styles.image}
        source={wateringImg}
        >
      </Image>

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <Button />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.heading,
  },
  image: {
    height: 284,
    width: 292
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    width: 56,
    height: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
});

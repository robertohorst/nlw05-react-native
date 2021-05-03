import React from 'react';
import { 
  Text, 
  SafeAreaView, 
  Image, 
  StyleSheet, 
  TouchableOpacity} from 'react-native';

import wateringImg from '../../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image
        source={wateringImg}
        resizeMode="contain"
        >
      </Image>

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleStart}
      >
          <Feather 
            name="chevron-right"
            style={styles.buttonIcon} />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 44,
    lineHeight: 34,
  },
  subTitle: {
    fontFamily: fonts.text,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.heading,
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
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  }
});

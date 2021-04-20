import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

export function Button(){
  return(
      <TouchableOpacity 
      activeOpacity={0.8}
      style={styles.button}>
      <Text style={styles.buttonText}>
        {'>'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
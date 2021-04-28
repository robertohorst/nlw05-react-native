import React from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviornmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviornmentButton({
  title,
  active = false,
  ... props
} : EnviornmentButtonProps ){
  return (
    <RectButton 
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {... props}
    >
      <Text
        style={[
          styles.text,
          active && styles.textActive
        ]}
      >
        { title }
      </Text>
    </RectButton>
  )
} 

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 76,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
    borderRadius: 12,
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  textActive: { 
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }

});

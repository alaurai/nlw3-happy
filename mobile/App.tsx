import React from 'react';
import { StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <h1>Hi!</h1>
  );
}

const styles = StyleSheet.create({

});

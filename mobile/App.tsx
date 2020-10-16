import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView ,{PROVIDER_GOOGLE} from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -20.25694,
          longitude: -47.4766,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

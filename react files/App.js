import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import StartScreen from './screens/StartScreen'
import DeviceStatus from './components/DeviceStatus'
export default function App() {

  //{DeviceStatus('light','ON','10')}
  //
  return (
    <View>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(0,0,255,.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

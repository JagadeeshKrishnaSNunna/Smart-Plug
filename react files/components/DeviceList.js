import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import firebase from "firebase";
import Scroll_View from './Scroll_View';
import colors from '../colors/colors';
var names=[];
var keyList=[];
const DeviceList = props => {
  const [a,b]=useState(0)
  const Config = {
    apiKey: "AIzaSyBTZPARAmvwSRFVN-RDyaFI5QpFiCFIV7I",
    authDomain: "reactiotapp.firebaseapp.com",
    databaseURL: "https://reactiotapp.firebaseio.com",
    projectId: "reactiotapp",
    storageBucket: "reactiotapp.appspot.com",
    messagingSenderId: "66958844146",
    appId: "1:66958844146:web:2c4e5fe9c757c2adeaf06b",
    measurementId: "G-EQ08JN1Z0T"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(Config);
  } else {
    firebase.app();
  }
  let Reference = firebase.database()
      Reference.ref('Device').on('value', (data) => {
        var dat = data.val() 
        keyList=Object.keys(dat)
        let i=0;
        keyList.forEach(ee=>{names[i]=dat[ee];i=i+1;})
        while(!a){
            if(names.length!=0){
                b(1);
                break
            }
        }
      })
  if(names.length!=0&&a){
    return (
    <View><Scroll_View aa={names}/></View>
      )
  }
  else{
    return (
      <View style={{margin:60}}> 
        <Text style={styles.loading}>Loading Devices.....!</Text>
        
      </View>
      )
  }

}
const styles=StyleSheet.create({
loading:{
  fontSize:30,
  color:colors.primary,
}
})
export default DeviceList;
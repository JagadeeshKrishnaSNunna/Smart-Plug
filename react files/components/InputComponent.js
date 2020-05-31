import React,{useState} from 'react'
import {View,StyleSheet, TextInput, Button,Text, Vibration} from 'react-native'
import firebase from "firebase";
import addDevice from './Firebase'

const InputComponent=props=>{


    const addData=(name,watts,status)=>{
        props.onAdded()
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
          if(!firebase.apps.length){
            firebase.initializeApp(Config);
          }else{
            firebase.app();
          }
          let Reference=firebase.database()
          
          Reference.ref('Counter/deviceCount').once('value',(data)=>{Reference.ref('Counter').set({deviceCount:data.val()+1})})
          Reference.ref('Counter/deviceCount').on('value',da=>{
              addDevice(name,watts,da.val())
          })   
    }
    const[name,setName]=useState('');
    const nameHandler=(name)=>{
        setName(name);
    }
    const [watts,setwatts]=useState('');
    const wattHandler=(watts)=>{
        setwatts(watts);
    }
    
    return(
        <View>
            <Text>Enter the device:</Text>
            <TextInput style={styles.inputfeild} onChangeText={nameHandler} value={name}/>
            <Text>Enter the watts:</Text>
            <TextInput style={styles.inputfeild} onChangeText={wattHandler} value={watts} keyboardType='numeric'/>
            <View style={styles.buttonContainer}>
                <Button  title='ADD' onPress={addData.bind(this,name,watts)}/>
                <Button  title='BACK' onPress={props.onCancel}/>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    inputfeild:{
        borderBottomColor:'blue',
        borderBottomWidth:1,
        marginVertical:20,

    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:'space-around'
    }
});

export default InputComponent;
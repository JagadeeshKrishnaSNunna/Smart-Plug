import React from 'react'
import firebase from "firebase";

const addDevice=(dname,dwatt,ddeviceId)=>{
    
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
      let Reference=firebase.database();
      Reference.ref('Device/'+dname).set({
              name:dname,
              watt:dwatt,
              status:"OFF",
          }).then(()=>{
              console.log('Successfully Inserted...!')
          }).catch((error)=>{console.log(error)})

}
export default addDevice;
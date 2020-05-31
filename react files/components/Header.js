import React from 'react'
import {StyleSheet,View, Text}from 'react-native'
import Colors from '../colors/colors'

const Header=()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Smart-Plug</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    header:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.primary,
        width:'97%',
        height:'30%',
        marginVertical:10,
        borderRadius:5
    },
    title:{
        fontSize:30,
        color:'#fff',
        fontFamily:'Cochin',
    }
});

export  default Header;
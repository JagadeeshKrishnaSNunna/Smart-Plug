import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import DeviceStatus from '../components/DeviceStatus'

const Switch = props => {
    const[onB,offB]=useState(props.status);
    const switchHandler=(stat)=>{
        
        if(onB=='ON'){
            offB('OFF');
            
        }else{
            offB('ON')
        }
        DeviceStatus(props.name,stat,props.watt)
    }
    if(onB=='ON'){
        return (
            <TouchableOpacity onPress={switchHandler.bind(this,'OFF')}>
                <View style={Styles.offContainer}>
                    <Text style={Styles.textStyle}>OFF</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else{
        return (
            <TouchableOpacity onPress={switchHandler.bind(this,'ON')}>
                <View style={Styles.onContainer}>
                    <Text style={Styles.textStyle}>ON</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const Styles = StyleSheet.create({
    offContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'red',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 50,
        margin:20
    },
    onContainer: {
        width: 150,
        height: 150,
        backgroundColor: 'blue',
        borderRadius: 96,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 50,
        margin:20
    },
    textStyle:{
        color:'white',
        fontWeight:'bold',
        fontSize:30,
    }
})

export default Switch;
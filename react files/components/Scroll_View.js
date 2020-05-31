import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native'
import colors from '../colors/colors'
import Switch from '../components/Switch'

var name,status,watt;
const Scroll_View = props => {
    //const a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    const deviceHandler = (pp)=> {name=pp.name;status=pp.status;watt=pp.watt;hide(0);}
    const backHandeler=()=>{hide(1);name=null}
    const [show, hide] = useState(1)
    if (show&&name==null) {
        return (
            <ScrollView style={styles.container}>
                {
                    props.aa.map(ele => {
                        return (
                            <TouchableOpacity onPress={deviceHandler.bind(this, ele)}>
                                <View style={styles.devicefeild}>
                                    <Text style={styles.textstyle}>{ele.name}</Text>
                                    <Text style={styles.textstyle}>{ele.watt}</Text>
                                    <Text style={styles.textstyle}>{ele.status}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    )
                }
            </ScrollView>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.deviceContainer}>
                        <Text style={styles.nameStyle}>{name}</Text>
                        <Switch status={status} name={name} watt={watt}/>
                        <Button style={{margin:30}} title='Back' onPress={backHandeler}/>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 200,
        margin: 60

    },
    devicefeild: {
        width: 350,
        height: 50,
        margin: 15,
        backgroundColor: colors.cards,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowRadius: 19,
        borderRadius: 10,
    },
    textstyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'notoserif'

    },
    deviceContainer: {
        width: 500,
        height: 350,
        backgroundColor: colors.primary,
        borderRadius: 20,
        shadowRadius: 10,
        alignItems: 'center',
        padding:20,
    },
    nameStyle:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        margin:20,
    }
});
export default Scroll_View

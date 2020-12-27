import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const LoginButton=({style,title,onPress})=>{
    return(
        <TouchableOpacity style={[style,styles.container]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#109dc4',
        padding:12,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize: 15,
        fontWeight:'500',
        color:'#ffffff'
    }
});

export default LoginButton;
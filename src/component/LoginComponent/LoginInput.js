import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {StyleSheet,TextInput} from 'react-native';

const LoginInput=({style,...props})=>{
    return(
        <TextInput {...props} style={[style,styles.Input]} />
    );
}

const styles=StyleSheet.create({
    Input:{
        width:'100%',
        borderBottomWidth:1,
    }
});

export default LoginInput;
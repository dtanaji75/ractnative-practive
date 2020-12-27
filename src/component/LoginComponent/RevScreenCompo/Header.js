import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Header =()=>{
    const navigation=useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={()=>{
                navigation.navigate('AddRev');
            }}>
            <Icon 
                name="plus"
                style={styles.Icon}
                size={20}
            />
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#109dc4",
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        justifyContent:"flex-end",
        marginBottom:10,
    },
    Icon:{
        color:'#FFFFFF',
        marginHorizontal:20,
        alignSelf:'center'
    }
});

export default Header;
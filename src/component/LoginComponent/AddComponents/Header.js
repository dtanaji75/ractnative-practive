import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome5";
import {View,Text,StyleSheet} from 'react-native';

const Header =()=>{
    return(
        <View style={styles.container}>
            <Icon 
                name="arrow-left"
                style={styles.Icon}
                size={20}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#109dc4",
        height:50,
        flexDirection:'row',
        marginBottom:10,
    },
    Icon:{
        color:'#FFFFFF',
        marginHorizontal:20,
        alignSelf:'center'
    }
});

export default Header;
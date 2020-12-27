import React,{useState} from 'react';
import LoginButton from '../component/LoginComponent/LoginButton';
import LoginInput from '../component/LoginComponent/LoginInput';
import {View,Text,StyleSheet,StatusBar, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";

export function LoginScreen({navigation}){
    const [user, setuser] = useState('');
    const [Password, setPassword] = useState('');
    const [Show, setShow] = useState(false);
    const [visible, setvisible] = useState(true);
    const [errorMessage, seterrorMessage] = useState('');
    const [valid, setvalid] = useState(true);

    // Validate=(text)=>{
    //     let reg= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if(reg.test(text)===false){
    //         setemail({email:text})
    //         return false;
    //     }
    //     else{
    //         setemail({email:text})
    //         console.log("Email is Correct");
    //     }
    // }
    // const isValidEmail=(text)=>{
    //     let reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if(reg.test(text)){
    //     setemail({email:text})
    //     }
    // }
    const Submit=()=>{
    if(!user){
            seterrorMessage('Enter Username');
            setvalid(false);
            return;
        }
        else if(!Password){
            seterrorMessage('Password is reqired');
            setvalid(false);
            return
        }
        dologin();
    }
    const dologin=async()=>{
       navigation.navigate('reservation');
    }
    return(
        <>
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#109dc4" />
            <View style={{flex:1,marginHorizontal:10}}>
            <Text style={styles.Login}>{'Login'}</Text>
            {errorMessage ? <View><Text style={{textAlign:'center',fontSize:12,color:'red'}}>{errorMessage}</Text></View> : null}
            <LoginInput 
               value={user}
               onChangeText={text=>{setuser(text)}}
               errorMessage={valid} 
               style={styles.Input}  
               placeholder={'Username'}
            />
             
            <LoginInput 
               value={Password}
               onChangeText={text=>setPassword(text)} 
               style={styles.Input}
               errorMessage={valid}  
               placeholder={'Password'}
               minValue={5}
               secureTextEntry={visible}
            />
           <TouchableOpacity style={styles.passShow} onPress={
                ()=>{
                    setvisible(!visible)
                    setShow(!Show)
                }
            }>
                <Icon 
                    name={Show === false ? 'eye' : 'eye-slash'}
                    size={25}
                />
            </TouchableOpacity>
            <LoginButton 
                title={'sign in'}
                style={styles.Button}
                onPress={Submit}
            />
            <View style={{alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('register');
                }}>
                    <Text>Create Account | <Text style={{color:'#109dc4'}}>Sign Up</Text></Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        </>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:10
    },
    Login:{
        textAlign:'center',
        fontWeight:'500',
        fontSize: 40,
        marginTop:50,
        marginBottom:20
    },
    Input:{
        marginVertical:30
    },
    Button:{
        alignSelf:'flex-end',
        marginVertical:10,
        marginBottom:50
    },
    passShow:{
        bottom:62,
        alignSelf:"flex-end"
    },
    footer:{
        textAlign:'center',
        fontSize:12,
    },
    Authorized:{
        fontSize:12,
        textAlign:'center'
    }
});
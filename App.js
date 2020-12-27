import React,{useContext,useEffect,useState} from 'react';
import {LogBox} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStackNavigation} from './src/Navigation/StackNavigator';
import AuthContext from './src/context/AuthProvider';


const RootStack=createStackNavigator();
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['warning:....']);
const App=()=>{
  return(
    <NavigationContainer>
        <RootStack.Navigator screenOptions={{
          headerShown:false,
          animationEnabled: false
        }}>
          <RootStack.Screen
            name={'RootStack'} component={AuthStackNavigation}>
          </RootStack.Screen>
        </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default()=>{
  return(
    <App />
  )
}
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import ResvDetailsScreen from '../screens/ResvDetailsScreen';
import AddReservScreen from '../screens/AddReservScreen';
import reservationDetailScreen from '../screens/reservationDetailScreen';
const AuthStack=createStackNavigator();

export function AuthStackNavigation(){
    return(
        <AuthStack.Navigator
            screenOptions={
                {
                    animationEnabled:false,
                    headerShown:false
                }
            }>
            <AuthStack.Screen
                name="Login" component={LoginScreen}>
            </AuthStack.Screen>
            <AuthStack.Screen
                name="AddRev" component={AddReservScreen}>
            </AuthStack.Screen>
            <AuthStack.Screen
                name="reservation" component={ResvDetailsScreen}>
            </AuthStack.Screen>
            <AuthStack.Screen
                name="EditDelete" component={reservationDetailScreen}>
            </AuthStack.Screen>
            <AuthStack.Screen
                name="register" component={SignUpScreen}>
            </AuthStack.Screen>
        </AuthStack.Navigator>        
    );
}
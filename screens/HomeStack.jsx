import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {  StyleSheet } from 'react-native';
import ContactUsForm from './FAQ/ContactUsForm';
import Home from './Home';
import HomeDetails from './HomeDetails';

const HomeStack = () => {

    const HomeStack = createNativeStackNavigator();


    return (
        <HomeStack.Navigator  >
            <HomeStack.Screen name = 'Home' component = {Home}/>
            <HomeStack.Screen name = 'Home Details' component = {HomeDetails}/>
            <HomeStack.Screen name = 'Contact Us' component = {ContactUsForm}/>
        </HomeStack.Navigator>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})

export default HomeStack;
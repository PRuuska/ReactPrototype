import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeDetails from './HomeDetails';
import ShoppingList from './ShoppingList';
import TestHome from './TestHome';

const TestStack= () => {

    const TestStack = createNativeStackNavigator();

    return (
        <TestStack.Navigator>
            <TestStack.Screen name='Test Home' component={TestHome}/>
            <TestStack.Screen name='Home Details' component={HomeDetails}/>
            <TestStack.Screen name='Shopping List' component={ShoppingList}/>
        </TestStack.Navigator>



        
    );
}

export default TestStack;
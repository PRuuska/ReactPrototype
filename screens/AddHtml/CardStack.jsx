import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Cards from './Cards';

function CardStack(props) {

    const CardStack = createNativeStackNavigator()

    return (
        <CardStack.Navigator>
            <CardStack.Screen name='Card' component={Cards}/>
        </CardStack.Navigator>

    );
}

export default CardStack;
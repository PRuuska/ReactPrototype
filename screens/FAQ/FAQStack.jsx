import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ContactUsForm from './ContactUsForm';
import FAQHelp from './FAQHelp';

const FAQStack = () => {

    const FAQStack = createNativeStackNavigator();


    return (
        
        <FAQStack.Navigator>
            <FAQStack.Screen name='FAQ Help' component={FAQHelp}/>
            <FAQStack.Screen name='Contact Us' component={ContactUsForm}/>
        </FAQStack.Navigator>


    );
}

export default FAQStack;
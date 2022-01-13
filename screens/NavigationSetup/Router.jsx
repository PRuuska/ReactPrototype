import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native-web';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './AppTabs';
import TestHome from '../TestHome';

function Router(props) {

    const RootStack = createNativeStackNavigator();

    //define rootstack

    return (
        <NavigationContainer>
            <RootStack.Navigator initalRoute='App Tabs'  screenOptions={{
                headerShown: false
            }}>
                <RootStack.Group >
                    <RootStack.Screen name='App Tabs' component={AppTabs}/>
                </RootStack.Group>
                <RootStack.Group>
                    <RootStack.Screen name='Test Home' component={TestHome}/>
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container:{


    }

})

export default Router;  
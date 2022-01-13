import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text } from 'react-native';
import Cards from '../AddHtml/Cards';
import CardStack from '../AddHtml/CardStack';
import FAQHelp from '../FAQ/FAQHelp';
import FAQStack from '../FAQ/FAQStack';
import HomeStack from '../HomeStack';
import TestStack from '../TestStack';

function AppTabs(props) {
const Tab = createBottomTabNavigator();
const nav = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName='Test Home'
            screenOptions={{
                headerShown: false
            }}>
                <Tab.Group>
                    <Tab.Screen 
                    name='Home Stack' 
                    component={HomeStack}
                    options={{
                        headerRight: () => (
                            <Pressable onPress={nav.navigate('Home Stack')}>
                                <Text>List</Text>
                            </Pressable>
                        )
                    }}  
                    />
                    <Tab.Screen 
                    name='Test Stack' 
                    component={TestStack}
                    options={{
                        headerRight: () => (
                            <Pressable onPress={nav.navigate('Test Stack')}>
                                <Text>List</Text>
                            </Pressable>
                        )
                    }}  
                    />
                    <Tab.Screen 
                    name='Cards' 
                    component={CardStack}
                    options={{
                        headerRight: () => (
                            <Pressable onPress={nav.navigate('Card Stack')}>
                                <Text>List</Text>
                            </Pressable>
                        )
                    }}  
                    />
                    <Tab.Screen 
                    name='Help!' 
                    component={FAQStack}
                    options={{
                        headerRight: () => (
                            <Pressable onPress={nav.navigate('FAQ Stack')}>
                                <Text>Help</Text>
                            </Pressable>
                        )
                    }}  
                    />

                </Tab.Group>

        </Tab.Navigator>
       
    );
}

export default AppTabs;
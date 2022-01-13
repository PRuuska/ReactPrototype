import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';


const Home = () => {

    const nav = useNavigation();

    const handleOnPress = () => {
        nav.navigate('Home Details', {id:1})

    }
    const handleContactUsOnPress = () => {
        nav.navigate('Contact Us')

    }

    return (

        <View style={styles.container}>

            <Pressable onPress={handleOnPress}>
                <Text>Go to Home Details</Text>
            </Pressable>

            <Pressable onPress={handleContactUsOnPress}>
                <Text>Contact Us</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})

export default Home;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const TestHome = () =>{

    const nav = useNavigation();

    const handleHomeDetailsOnPress = () =>{

        nav.navigate('Home Details',{id:1});

    };

    const handlShoppingListOnPress = () =>
    {
        nav.navigate('Shopping List');

    }

    return (
        <View style={styles.container}>
            <Text>Test home screen</Text>

            <Button onPress={handleHomeDetailsOnPress} title='Home Details'/>
            <Button style={styles.shoppingListBtn} onPress={handlShoppingListOnPress} title='Shopping List'/>
                {/* <Text>Go to Home Details</Text> */}

        </View>

      
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shoppingListBtn:{
        backgroundColor:'tomato'
    },

    shoppingListBtn:{
    }

    
})

export default TestHome;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { View , Button} from 'react-native';

const FAQHelp = () => {

const nav = useNavigation();

const handleContactUsNavigation = () =>{
    nav.navigate('Contact Us',{id:1})
};

    return (
        <View>
            <Text>Help</Text>
            <Button title='Contact Us' onPress={handleContactUsNavigation}/>
        </View>
    );
}

export default FAQHelp;
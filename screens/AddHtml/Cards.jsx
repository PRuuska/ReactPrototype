import React, { useState } from 'react';
import { Linking } from 'react-native';
import { Button, View} from 'react-native';
import RenderHtml from 'react-native-render-html';


function Cards(props) {

const source = {
    html:`<a href='google.com'>click me</a>`

}

const [text, setText] = useState("test")
const handlerPress = () =>
{

    console.log(text);
}

const [url, linkingUrl] = useState('https://www.facebook.com/.')

const renderLink = () =>{
    Linking.openURL(url)
}

    return (
        <View>
            <RenderHtml source={source}/>

            <Button title='open link' onPress={renderLink}/>
        </View>

    );
}

export default Cards;
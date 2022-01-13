import React, {useState} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, SafeAreaView, TextInput, TouchableOpacity  } from 'react-native';
import Task from './Task';

function ShoppingList(props) {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () =>{
        setTaskItems([...taskItems,task])
        setTask(null);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Item Wrapper */}
            <View style={styles.itemWrapper}>
                <Text style={styles.sectionTitle}>Items</Text>

                <KeyboardAvoidingView style={styles.writeTaskWrapper}>
                    <TextInput style={styles.input}
                     placeholder={'Write something...'} 
                     onChangeText={text => setTask(text)}
                     value={task} 
                     ></TextInput>

                    <TouchableOpacity onPress={() => handleAddTask()} >
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            <View style={styles.itemWrapper}>
                <View styles={styles.items}>
                        {/* items will go here */}

                        {
                            taskItems.map((item, index) => {
                                return <Task key={index} text={item}/>
                            }) 
                        }
    
                </View>
            </View>


            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    writeTaskWrapper:{
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemWrapper:{
        // paddingHorizontal:
        // padding: 80,
        // paddingHorizontal: 20,
    },
    sectionTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 200,
        paddingVertical: 50


    },
    items:{
        



    },
    input:{
        backgroundColor: '#fff',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 300,
        paddingHorizontal: 15,
        paddingVertical: 15,

    },
    addWrapper:{
        width:40,
        height: 40,
        backgroundColor: 'tomato',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
                
    },
    addText:
    {
        color: '#fff'
    }
    
})

export default ShoppingList;    
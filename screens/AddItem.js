import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from '../Constants/Actions';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";

export default class AddItem extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            itemStr: ''
        }
    }

    handleItemInfoChange = (event) => {
        this.setState({itemStr:event.nativeEvent.text});
    };

    handleSubmit = () => {
        fetch('https://lab5redo8-4-20.herokuapp.com/create_order', {method: 'POST', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
            body:JSON.stringify({itemInfo:this.state.itemStr})})
            .then((response)=> response.json())
            .then((responseJson)=> {
                console.log(responseJson);

                this.props.navigation.navigate("Home",{userInfoJson:responseJson});
            })

            .catch((error)=> {console.error(error);});
    }

    render(){
        return(
            <View style={styles.main}>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor='black'
                    placeholder="Item Name"
                    onChange={this.handleItemInfoChange}
                />
                    <TouchableOpacity
                        style={styles.AddButton}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.ButtonColor}>+ Add Item</Text>
                    </TouchableOpacity>
            </View>
        )
    }
};
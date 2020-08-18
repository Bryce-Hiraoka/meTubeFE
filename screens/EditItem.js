import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import styles from '../Constants/Actions';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";

export default class EditItem extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            PIDStr: '',
            itemStr: ''
        }
    }

    handleUIDChange = (event) => {
        this.setState({PIDStr:event.nativeEvent.text});
    };

    handleItemInfoChange = (event) => {
        this.setState({itemStr:event.nativeEvent.text});
    };

    handleSubmit = () => {
        this.props.navigation.navigate("loggedIn")
    }

    render(){
        return(
            <View style={styles.main}>
                <TextInput
                    style={styles.textInput}
                    placeholderTextColor='black'
                    placeholder="Product ID"
                    onChange={this.handleUIDChange}
                />
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
                    <Text style={styles.ButtonColor}>Edit Item</Text>
                </TouchableOpacity>
            </View>
        )
    }
};
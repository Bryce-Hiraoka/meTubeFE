import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import styles from '../Constants/HomeStyle';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";

export default class Profile extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            numberStr: '',
            passwordStr: ''
        }
    }

    handleSubmit = () =>{
        console.log(this.state);

        fetch('https://lab5redo8-4-20.herokuapp.com/authenticateUser', {method: 'POST', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
            body:JSON.stringify({number:this.state.numberStr,password:this.state.passwordStr})})
            .then((response)=> response.json())
            .then((responseJson)=> {
                console.log(responseJson);
            })
            .catch((error)=> {console.error(error);});
    };

    handleAdd = () =>{}

    render(){
        return(
            <View style={styles.Home}>
                <View style={styles.Add}>
                    <TouchableOpacity
                        onPress={this.handleAdd}
                    >
                        <Text style={styles.addText}>
                            + Add Item
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

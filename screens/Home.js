import React from 'react';
import styles from '../Constants/HomeStyle';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import ItemInfo from "./components/ItemInfo";

export default class home extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            numberStr: '',
            passwordStr: '',
            PIDStr:'',
            userInfoJson:this.props.navigation.getParam("userInfoJson")
        }
    }

    handleAdd = () => {
        this.props.navigation.navigate("actions")
    };

    handleEdit = () => {
        this.props.navigation.navigate("actions")
        this.props.navigation.navigate("action2")
    };

    retrieveUserData = () =>{

        fetch('https://lab5redo8-4-20.herokuapp.com/authenticateUser', {method: 'GET', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
            body:JSON.stringify({pid:this.state.PIDStr})})
            .then((response)=> response.json())
            .then((responseJson)=> {
                console.log(responseJson);
                this.props.navigation.navigate("Home",{userInfoJson:responseJson});
            })
            .catch((error)=> {console.error(error);});
    }
    render(){
        return(
            <View style={styles.Home}>
                <TouchableOpacity
                    style={styles.Add}
                    onPress={this.handleAdd}
                >
                    <Text style={styles.buttonText}>
                        + Add Item
                    </Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity
                            style={styles.contButton}
                            onClick={this.handleEdit}
                        >
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.contButton}
                            onClick={this.handleDelete}
                        >
                            <Text style={styles.buttonText}> Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
};

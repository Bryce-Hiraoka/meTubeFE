import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styles from '../Constants/HomeStyle';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";

export default class home extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            numberStr: '',
            passwordStr: '',
            PIDStr: '',
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

    handleDelete = () => {
        fetch('https://lab5redo8-4-20.herokuapp.com/delete', {method: 'POST', headers:
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

import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import styles from "../../Constants/HomeStyle";
import EditItem from "../EditItem";

export default class ItemInfo extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            PIDStr:this.props.param.PIDStr
        }
    }

    retrieveUserData = async () =>{
        await fetch('https://lab5redo8-4-20.herokuapp.com/userInterface', {method: 'GET', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
        })
            .then((response)=> response.json())
            .then((responseJson)=> {
                console.log(responseJson);
                this.setState({userInfoJson:responseJson});
            })
            .catch((error)=> {console.error(error);});
    };

    async componentDidMount() {
        await this.retrieveUserData();
    }

    handleEdit = () => {
        console.log('working', this.state.PIDStr)
        this.props.navigation.navigate("EditItem", { PIDStr: this.state.PIDStr });

    };


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.itemCont}>
                    <Text style={styles.items}>{this.props.msg}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.buttonCont}>
                        <TouchableOpacity
                            style={styles.contButton}
                            onPress={this.handleEdit}
                        >
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.contButton}
                            onPress={this.handleDelete}
                        >
                            <Text style={styles.buttonText}> Delete</Text>
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import styles from '../Constants/SignInStyle';
import ItemInfo from "./components/ItemInfo";




export default class home extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            numberStr: '',
            passwordStr: '',
            userInfoJson:this.props.navigation.getParam("userInfoJson")
        }
    }c

    retrieveUserData = () =>{

        fetch('https://lab5redo8-4-20.herokuapp.com/authenticateUser', {method: 'GET', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
            body:JSON.stringify({number:this.state.numberStr,password:this.state.passwordStr})})
            .then((response)=> response.json())
            .then((responseJson)=> {
                console.log(responseJson);
            })
            .catch((error)=> {console.error(error);});
    };
    render(){
        return(
            <View>
                <ItemInfo msg={JSON.stringify(this.state.userInfoJson)} />
                <ItemInfo msg="Creating Reusable React Components" />
                {this.state.userInfoJson.map((item)=>{
                    if(item){
                        return <ItemInfo msg={item.itemInfo} />
                    }
                })}
                <Text>{JSON.stringify(this.state.userInfoJson)}</Text>
            </View>
        )
    }
}

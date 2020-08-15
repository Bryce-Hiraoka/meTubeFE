import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailFocus:false,
            passwordFocus:false,
            emailstr:'',
            passwordstr:''
        }
    }

    handleSubmit=()=>{
        console.log(this.state);
        this.props.navigation.navigate("loggedIn");

    };

    handleEmailFocus = ()=>{
        this.setState({emailFocus:true})
    };
    handleEmailBlur = ()=>{
        this.setState({emailFocus:false})
    };
    handleEmailChange = (event)=>{
        this.setState({emailstr:event.nativeEvent.text});
    };

    handlePasswordFocus = ()=>{
        this.setState({passwordFocus:true})
    };
    handlePasswordBlur = ()=>{
        this.setState({passwordFocus:false})
    };
    handlePasswordChange = (event)=>{
        this.setState({passwordstr:event.nativeEvent.text});
    };
    render(){
        return(
            <View>

            </View>
    );
    }
}

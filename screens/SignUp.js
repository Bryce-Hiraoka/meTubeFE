import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import styles from '../Constants/SignInStyle';

export default class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberFocus:false,
            passwordFocus:false,
            confirmPassFocus:false,
            numberStr:'',
            passwordStr:''
        }
    }

    handleSubmit=()=>{
        console.log(this.state);
        this.props.navigation.navigate("loggedIn");

    };

    handleNumberFocus = ()=>{
        this.setState({numberFocus:true})
    };

    handleNumberBlur = ()=>{
        this.setState({numberFocus:false})
    };

    handleNumberChange = (event)=>{
        this.setState({numberStr:event.nativeEvent.text});
    };

    handlePasswordFocus = ()=>{
        this.setState({passwordFocus:true})
    };

    handlePasswordBlur = ()=>{
        this.setState({passwordFocus:false})
    };

    handleConfirmFocus = ()=>{
        this.setState({confirmPassFocus:true})
    };

    handleConfirmBlur = ()=>{
        this.setState({confirmPassFocus:false})
    };

    handlePasswordChange = (event)=>{
        this.setState({passwordStr:event.nativeEvent.text});
    };

    render(){
        return(
            <View style={styles.container}>
                <Avatar.Image style={styles.logo}
                              size={200}
                              source={require('../assets/PVlogo.jpeg')}
                />
                <View style={styles.box}>
                    <TextInput
                        style={this.state.numberFocus?styles.textInputHoverNum:styles.textInputNum}
                        onFocus={this.handleNumberFocus}
                        onBlur={this.handleNumberBlur}
                        placeholderTextColor='black'
                        placeholder="Number"
                        onChange={this.handleNumberChange}
                    />
                    <TextInput
                        style={this.state.passwordFocus?styles.textInputHoverPass:styles.textInputPass}
                        onFocus={this.handlePasswordFocus}
                        onBlur={this.handlePasswordBlur}
                        placeholderTextColor='black'
                        placeholder="Password"
                        onChange={this.handlePasswordChange}
                    />
                    <TextInput
                        style={this.state.confirmPassFocus?styles.textInputHoverPass:styles.textInputPass}
                        onFocus={this.handleConfirmFocus}
                        onBlur={this.handleConfirmBlur}
                        placeholderTextColor='black'
                        placeholder="Confirm Password"
                    />
                    <TouchableOpacity
                        onPress={this.handleSubmit}
                        style={styles.button}
                    >
                        <Text
                            style={styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
    }
}

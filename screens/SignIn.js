import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Constants/SignInStyle';

export default class Signin extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            numberFocus: false,
            passwordFocus: false,
            numberStr: '',
            passwordStr: ''
        }
    }

    handleSubmit = () =>{
        console.log(this.state);
        this.props.navigation.navigate("loggedIn");
    };

    handleSignUp = () =>{
        this.props.navigation.navigate("SignUp")
    };

    handleNumberFocus = () =>{
        this.setState({numberFocus: true});
    };

    handleNumberBlur = () =>{
        this.setState({numberFocus: false});
    };

    handlePasswordFocus = () =>{
        this.setState({passwordFocus: true});
    };

    handlePasswordBlur = () =>{
        this.setState({passwordFocus: false});
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <TextInput
                        style={this.state.numberFocus?styles.textInputHover:styles.textInput}
                        onFocus={this.handleNumberFocus}
                        onBlur={this.handleNumberBlur}
                        placeholderTextColor='black'
                        placeholder="Number"
                    />
                    <TextInput
                        style={this.state.passwordFocus?styles.textInputHover:styles.textInput}
                        onFocus={this.handlePasswordFocus}
                        onBlur={this.handlePasswordBlur}
                        placeholderTextColor='black'
                        placeholder="Password"
                    />
                    <TouchableOpacity
                        onPress={this.handleSubmit}
                    >
                        Login
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleSignUp}
                    >
                        Sign Up Here
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
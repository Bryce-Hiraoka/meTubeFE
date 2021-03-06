import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
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

        fetch('https://lab5redo8-4-20.herokuapp.com/authenticateUser', {method: 'POST', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
            body:JSON.stringify({number:this.state.numberStr,password:this.state.passwordStr})})
            .then((response)=> response.json())
            .then((responseJson)=> {
                console.log(responseJson);
                this.props.navigation.navigate("Home",{userInfoJson:responseJson});

            })
            .catch((error)=> {console.error(error);});

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

    handleNumberChange = (event) => {
        this.setState({numberStr:event.nativeEvent.text});
    };

    handlePasswordChange = (event) => {
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
                    <TouchableOpacity
                        onPress={this.handleSubmit}
                        style={styles.button}
                    >
                        <Text
                        style={styles.buttonText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.signUp}>
                        <Text> Don't have an account?</Text>
                        <TouchableOpacity onPress={this.handleSignUp}>
                            <Text style={styles.button2Text}> SignUp </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

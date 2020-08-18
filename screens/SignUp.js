import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
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
            passwordStr:'',
            confirmPasswordStr:''
        }
    }

    handleSubmit=()=>{
        try{
            console.log(this.state.passwordStr==this.state.confirmPasswordStr);
            if(this.state.passwordStr==this.state.confirmPasswordStr){
                console.log(this.state);
                fetch('https://lab5redo8-4-20.herokuapp.com/userSignup', {method: 'POST', headers:
                        {Accept:'application/json', 'Content-Type': 'application/json'},
                    body:JSON.stringify({number:this.state.numberStr,password:this.state.passwordStr})})
                        .then((response)=> response.json())
                        .then((responseJson)=> {
                            console.log(responseJson);
                            this.props.navigation.navigate("Home",{userInfoJson:responseJson});
                        })
                    .catch((error)=> {console.error(error);});

            }else{
                return Alert.alert('asdfadasdfasdfasdf',
                    'Your account creation failed'),
                    [
                        {text:'Return to Signin', onPress: () => {navigation.navigate({routeName:'notLoggedIn'})}}
                    ]
            }
        }catch(err){
            return Alert.alert('Signup error',
                'Your account creation failed'),
                [
                    {text:'Return to Signin', onPress: () => {navigation.navigate({routeName:'notLoggedIn'})}}
                ]
        }


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

    handleConfirmFocus = ()=>{
        this.setState({confirmPassFocus:true})
    };

    handleConfirmBlur = ()=>{
        this.setState({confirmPassFocus:false})
    };


    handleNumberChange = (event)=>{
        this.setState({numberStr:event.nativeEvent.text});
    };

    handleConfirmPasswordChange= (event)=>{
        this.setState({confirmPasswordStr:event.nativeEvent.text});
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
                        onChange={this.handleConfirmPasswordChange}
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

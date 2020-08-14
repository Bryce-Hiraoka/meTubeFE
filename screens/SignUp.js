import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';


export default class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberFocus:false,
            passwordFocus:false,
            numberStr:'',
            passwordStr:''
        }
    }

    handleSubmit=()=>{
        try{
            if(this.state.passwordStr==this.state.confirmPasswordStr){
                console.log(this.state);
                fetch('https://lab5redo8-4-20.herokuapp.com/userSignup', {method: 'POST', headers:
                        {Accept:'application/json', 'Content-Type': 'application/json'},
                    body:JSON.stringify({number:this.state.numberStr,password:this.state.passwordStr})})
                        .then((response)=> response.json())
                        .then((responseJson)=> {
                            console.log(responseJson);
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
            this.props.navigation.navigate("loggedIn");

    };

    handleNumberChange = (event)=>{
        this.setState({numberStr:event.nativeEvent.text});
    };

    handlePasswordChange = (event)=>{
        this.setState({passwordStr:event.nativeEvent.text});
    };

    handleConfirmPasswordChange = (event)=>{
        this.setState({confirmPasswordStr:event.nativeEvent.text});
    };

    render(){
        return(
            <View /*style={}*/>
                <View /*style={}*/>

                    <TextInput /*style={}*/
                           onChange={this.handleNumberChange}
                           placeholder={"number"}
                    />
                    <TextInput /*style={}*/
                           onChange={this.handlePasswordChange}
                           placeholder={"password"}
                    />
                    <TextInput /*style={}*/
                        onChange={this.handleConfirmPasswordChange}
                        placeholder={"confirm password"}
                    />
                    <TouchableOpacity
                        /*style={}*/
                        onPress={this.handleSubmit}>
                        <Text
                            /*style={}*/
                        >Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
    }
}

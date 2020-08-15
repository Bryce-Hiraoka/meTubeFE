import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {
    createAppContainer,
    createSwitchNavigator
} from "react-navigation";
import {Alert} from "react-native";
import {FontAwesome} from "react-native-vector-icons";
import React from 'react';

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

export const notLoggedIn = createStackNavigator(
    {

        SignIn:{
            screen:SignIn,
            navigationOptions: {
                headerTitle: 'Signin',
            }
        },
        SignUp:{
            screen:SignUp,
            navigationOptions: {
                headerTitle: 'SignUp',
            }
        }

    }
);


export default createAppContainer(
    createSwitchNavigator(
        {
            notLoggedIn:{
                screen:notLoggedIn
            }
        }
    )
);
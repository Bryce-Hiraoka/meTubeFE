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
import Home from "../screens/Home";

import AddItem from "../screens/AddItem";
import EditItem from "../screens/EditItem";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import ItemInfo from "../screens/components/ItemInfo";


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

export const loggedIn = createBottomTabNavigator(
    {
        Home:{
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon:({tintColor}) =>(
                    <FontAwesome name="home" size={30} color={tintColor} />
                )
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon:({tintColor}) =>(
                    <FontAwesome name="user" size={30} color={tintColor} />
                )
            }
        },
        Logout:{
            screen: Logout,
            navigationOptions:({navigation}) => ({
                tabBarIcon:({tintColor}) =>(
                    <FontAwesome name="sign-out" size={30} color={tintColor} />
                ),
                tabBarOnPress:(scene, jumpToIndex)=>{
                    return Alert.alert('Log Off Confirmation',
                        'Are you sure you want to log off?',
                        [
                            {text:'Accept', onPress: () => (navigation.navigate({routeName: 'notLoggedIn'}))},
                            {text: 'Cancel'}
                        ]
                    );
                }
            })
        }
    }
);

export const actions = createStackNavigator(
    {
        AddItem:{
            screen: AddItem,
            navigationOptions: {
                headerTitle: 'Add Item'
            }
        }
    }
);

export const action2 = createStackNavigator(
    {
        EditItem: {
            screen: EditItem,
            navigationOptions: {
                headerTitle: 'Edit Item'
            }
        }
    }
    );

export default createAppContainer(
    createSwitchNavigator(
        {
            notLoggedIn:{
                screen:notLoggedIn
            },
            loggedIn:{
                screen:loggedIn
            },
            actions:{
                screen:actions
            },
            action2:{
                screen:action2

            }
}
    )
);
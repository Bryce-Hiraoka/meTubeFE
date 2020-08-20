import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import styles from '../Constants/ProfileStyle';
import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";

export default class Profile extends React.Component{

    render(){
        return(
            <View style={styles.Profile}>
                <Text style={styles.ProfileText}> Profile </Text>
            </View>
        );
    }
};

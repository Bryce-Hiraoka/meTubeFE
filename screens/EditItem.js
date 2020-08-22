import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import styles from '../Constants/Actions';

export default class EditItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfoStr: '',
            PIDStr: this.props.navigation.state.params.PIDStr
        }
    }

    handelItemInfoChange = (event) => {
        this.setState({itemInfoStr:event.nativeEvent.text});
    }

    handelChangeUserData = async () => {
        console.log("Edit item ", this.state.PIDStr);
        await fetch('https://lab5redo8-4-20.herokuapp.com/change', {method: 'POST', headers:
                {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({pid: this.state.PIDStr, itemInfo: this.state.itemInfoStr})
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(this.state.PIDStr);
                this.props.navigation.navigate("Home", {userInfoJson: responseJson});
            })
            .catch((error) => {
                console.error(error);
            });
    };


    render() {
        return (
            <View style={styles.main}>
                <TextInput
                    style={styles.textInput}
                    onChange={this.handelItemInfoChange}
                    placeholder="New Item Name"
                    placeholderTextColor='black'
                />
                <TouchableOpacity
                    style={styles.AddButton}
                    onPress={this.handelChangeUserData}
                >
                    <Text style={styles.ButtonColor}>
                        Edit Item
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

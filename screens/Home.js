import React from 'react';
import styles from '../Constants/HomeStyle';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import ItemInfo from "./components/ItemInfo";

export default class home extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            numberStr: '',
            passwordStr: '',
            PIDStr:'',
            userInfoJson:[]
        }
    }

    retrieveUserData = async () =>{

        await fetch('https://lab5redo8-4-20.herokuapp.com/userInterface', {method: 'GET', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
        })
            .then((response)=> response.json())
            .then((responseJson)=> {
                this.setState({userInfoJson:responseJson});
            })
            .catch((error)=> {console.error(error);});
    };

    async componentDidMount() {
        await this.retrieveUserData();
    }

    handleAdd = () => {
        this.props.navigation.navigate("actions")
    };

    render(){
        return(
                <View style={styles.Home}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}> Home </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.Add}
                        onPress={this.handleAdd}
                    >
                        <Text style={styles.buttonText}>
                            + Add Item
                        </Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <View>
                            {this.state.userInfoJson.map(item=>{
                                if(item){

                                    return <ItemInfo msg={item.itemInfo} navigation={this.props.navigation} param={{PIDStr:item.pid}} update={retrieve}/>
                                }
                            })}
                        </View>
                    </ScrollView>
                </View>
        );
    }
};

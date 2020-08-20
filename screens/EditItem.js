import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import styles from '../Constants/HomeStyle';
import ItemInfo from "./components/ItemInfo";




export default class EditItem extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            pidStr: this.props.navigation.param,
            itemInfoStr: '',
            // userInfoJson:this.props.navigation.getParam("userInfoJson")
        }
    }

    changeUserData = async() =>{

        await fetch('https://lab5redo8-4-20.herokuapp.com/change', {method: 'POST', headers:
                {Accept:'application/json', 'Content-Type': 'application/json'},
            body:JSON.stringify({pid:this.state.pidStr,itemInfo:this.state.itemInfoStr})})
            .then((response)=> response.json())
            .then((responseJson)=> {
                console.log(responseJson);
            })
            .catch((error)=> {console.error(error);});
    };



    render(){
        return(
            <ScrollView>
                <ItemInfo msg={JSON.stringify(this.state.userInfoJson)} />
                <ItemInfo msg="Creating Reusable React Components" />
                {this.state.userInfoJson.map((item)=>{
                    if(item){
                        console.log(item.itemInfo);
                        return <ItemInfo style={styles.container} msg={item.itemInfo} />
                    }
                })}
            </ScrollView>
        )
    }
}

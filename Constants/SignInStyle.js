import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    box: {
        flex:1,
        paddingRight: 150,
        paddingLeft: 150,
        backgroundColor: '#13974b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:40,
        marginTop: 20
    },
    textInputNum: {
        height: 45,
        width: 300,
        marginBottom: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 25,
        paddingLeft: 20
    },
    textInputPass: {
        height: 45,
        width: 300,
        marginBottom: 20,
        backgroundColor: 'lightgrey',
        borderRadius: 25,
        paddingLeft: 20
    },
    textInputHoverNum: {
        height: 45,
        width: 300,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingLeft: 20
    },
    textInputHoverPass: {
        height: 45,
        width: 300,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingLeft: 20
    },
    button: {
        height: 45,
        width: 250,
        backgroundColor: 'blue',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 5
    },
    signUp: {
        height:45,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button2Text:{
        color: 'blue',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    logo: {
        marginTop: 50,
        marginBottom: 30
    },
    buttonText: {
        color: 'white'
    }


});
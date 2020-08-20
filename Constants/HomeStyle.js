import {StyleSheet, View} from "react-native";

export default StyleSheet.create({
    Home: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        height: 70,
        width: '100%',
        borderWidth: 1,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    Add: {
        height: 60,
        width: 330,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 25,
        marginLeft: 25,
        borderRadius: 7
    },

    buttonText: {
        color: 'white'
    },
    container: {
        height: 150,
        width: 330,
        backgroundColor: 'lightgrey',
        marginTop: 20,
        marginRight: 25,
        marginLeft: 25,
        borderRadius: 7,
    },
    contButton: {
        height: 30,
        width: 80,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 8,
        marginBottom: 8
    },
    buttonCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },

    itemCont:{
        height: 100,
        width: '100%',
        paddingLeft: 20,
        zIndex: 1
    },

    items: {
        fontSize: 65
    },

    line: {
        height:1,
        width: '100%',
        backgroundColor: 'black',
    }
});
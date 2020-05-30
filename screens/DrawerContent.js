import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DrawerContent extends Component {
 
    render() {
        return(
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={()=>Actions.Home()}>
                    <View>
                        <Text style={styles.option}>Home</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=>Actions.Screen1()}>
                    <View>
                        <Text style={styles.option}>Counter</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=>Actions.Screen2()}>
                    <View>
                        <Text style={styles.option}>Multiplier</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={()=>Actions.Screen3()}>
                    <View>
                        <Text style={styles.option}>Image Pass</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    option: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 45,
        paddingTop: 40,
        paddingBottom: 20
    }
});
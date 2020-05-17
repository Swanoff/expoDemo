import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
        <Button 
            onPress={()=>Actions.Home()}
            title='Goto Home'
        />
        <Button 
            onPress={()=>Actions.Screen2()}
            title='Goto Screen2'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
});

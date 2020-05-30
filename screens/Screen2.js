import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Multiplier
export default class Screen2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      multiplier: 1,
      value: 1
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Multiplier</Text>
        <Text>x-Value: {this.state.multiplier}</Text>
        <TextInput 
          placeholder = 'Enter multiplier'
          onChangeText = {text => this.setState({multiplier: Number(text)})}
        />
        <TextInput 
          placeholder = 'Enter value'
          onChangeText = {text => this.setState({value: Number(text)})}
        />
        <Text>Output: {this.state.multiplier * this.state.value}</Text>
        {/* <Button 
            onPress={()=>Actions.Home()}
            title='Goto Home'
        /> */}
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

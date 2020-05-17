import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleNameChange(text) {
    this.setState({
      name: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <TextInput 
          placeholder = 'Type your name here'
          onChangeText = {text => this.handleNameChange(text)}
        />
        <Text>Hello, {this.state.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

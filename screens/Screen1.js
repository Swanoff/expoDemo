import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Simple COunter
export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Simple Counter</Text>
        <Text style={{fontSize: 60}}>{this.state.count}</Text>
        <View style={{flexDirection: 'row'}}>
          <Button 
              onPress={()=>this.setState({count: this.state.count-1})}
              title='-'
          />
          <View style={{width: 100}}></View>
          <Button 
              onPress={()=>this.setState({count: this.state.count+1})}
              title='+'
          />
        </View>
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

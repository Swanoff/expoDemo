import React, {Component} from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';

import Home from './screens/Home';
import Screen1 from './screens/Screen1'; // Counter Screen
import Screen2 from './screens/Screen2'; // Multiplier Screen
import DrawerContent from './screens/DrawerContent';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root' headerMode='none'>
          <Drawer contentComponent={DrawerContent} drawerWidth={280}>
            <Scene 
              key='Home' 
              component={Home}
              initial
            />
            <Scene 
              key='Screen1'
              component={Screen1}
            />
            <Scene 
              key='Screen2'
              component={Screen2}
            />
          </Drawer>
        </Scene>
      </Router>
    );
  }

}
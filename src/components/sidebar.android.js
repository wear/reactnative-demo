'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';


var deviceScreen = require('Dimensions').get('window');
var width = deviceScreen.width*0.7;


import Avatar from './common/avatar'

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render(){

    return <Animated.View style={[
      styles.container,
      {height: deviceScreen.height, width: width}
      ]}>
        <View style={styles.primarySection}>
          <Text>sdf</Text>
        </View>
        <View style={styles.actionSection}>
          <Text>sdf</Text>
        </View>
      </Animated.View>
  }
}

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    borderWidth: 1,
    borderColor: 'blue'
  },
  primarySection: {
    flex: 1,
    backgroundColor: '#FF5722'
  },
  actionSection: {
    flex: 2,
    backgroundColor: '#ffffff'
  }
})

module.exports = Sidebar;

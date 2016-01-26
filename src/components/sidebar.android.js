'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';


const deviceScreen = require('Dimensions').get('window');
const width = deviceScreen.width*0.7;

import Avatar from './common/avatar'

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <View style={[
      styles.container,
      {height: deviceScreen.height, width: width}
      ]}>
        <View style={styles.primarySection}>
          <Text>sdf</Text>
        </View>
        <View style={styles.actionSection}>
          <Text>sdf</Text>
        </View>
      </View>
  }
}

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    borderRightWidth: 1,
    borderRightColor: '#B6B6B6',
    elevation: 2
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

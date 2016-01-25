'use strict';

import React, {
  Component,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');

var sidebarWidth = (width*2)/3;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarHidden: false
    }
  }
  render(){
    return <View style={[styles.container, {height: height, width: sidebarWidth, right: (width - sidebarWidth)}]}>
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

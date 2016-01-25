'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';


import Avatar from './common/avatar'

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  getLayout(){
    return {
      transform: [
        {translateX: this.props.pan.x }
      ]
    }
  }
  render(){

    return <Animated.View style={[
      styles.container,
      {height: this.props.size.height, width: this.props.size.width, right: this.props.right},
      this.getLayout()
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  Text,
  View,
  Navigator,
  StyleSheet,
} from 'react-native';


import Topic from './src/components/topic';
import Topics from './src/components/topics'

class rubyChina extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator){
    switch(route.name){
      case 'topic':
        return <Topic route={route} navigator={navigator} {...route.passProps} />
      default:
        return <Topics route={route} navigator={navigator} />
    }
  }

  render(){
    return  <Navigator
          initialRoute={{name: 'allTopics'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    height:56,
    backgroundColor: '#FF5722'
  },
  navBar:{
    flex: 1
  }
});

AppRegistry.registerComponent('rubyChina', () => rubyChina);

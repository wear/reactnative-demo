'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

const HEADER = '#3b5998';
const BGWASH = 'rgba(255,255,255,0.8)';
const DISABLED_WASH = 'rgba(255,255,255,0.25)';

const TEXT_INPUT_REF = 'urlInput';
const WEBVIEW_REF = 'webview';


export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const DEFAULT_URL = 'https://ruby-china.org/topics/' + this.props.topicId;

    return  <View style={styles.container}>
          <WebView
            ref={WEBVIEW_REF}
            automaticallyAdjustContentInsets={false}
            url={DEFAULT_URL}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onShouldStartLoadWithRequest={true}
            startInLoadingState={true}
            scalesPageToFit={true} />
          </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#727272',
  },
})

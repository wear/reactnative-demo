'use strict';

import React, {
  Component,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Avatar from './common/avatar'
import moment from 'moment';

export default class TopicItem extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {item} = this.props;

    return <View style={styles.card}>
      <View style={styles.leftIcon}>
        <Avatar image={<Image source={{uri: item.user.avatar_url }} />} />
      </View>
      <View style={{flex:1,justifyContent:'center', paddingTop: 14, paddingBottom: 16}}>
        <View style={styles.row}>
          <Text style={styles.captionText}>
            <Text style={styles.clickableText}>{item.user.name}</Text><Text>发布于</Text><Text style={styles.clickableText}>{item.node_name}</Text>
          </Text>
        </View>
        <View style={styles.primaryTextContainer}>
          <Text style={styles.primaryText}>{item.title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.captionText}>
            <Text>由</Text><Text style={styles.clickableText}>{item.last_reply_user_login}</Text><Text>回复于</Text><Text>{moment(item.replied_at).fromNow()} </Text>
          </Text>
        </View>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    margin: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: '#B6B6B6',
    flexDirection: 'row',
  },
  leftIcon: {
    width: 56,
    paddingTop: 16,
    alignSelf: 'flex-start'
  },
  avatarImage: {
    borderColor: '#B6B6B6',
    borderWidth: 1
  },
  row: {
    flexDirection: 'row'
  },
  primaryText:{
    fontFamily: 'NotoSans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#212121'
  },
  captionText: {
    fontFamily: 'NotoSans',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#727272'
  },
  primaryTextContainer: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5
  },
  clickableText: {
    color: '#E64A19'
  },
})

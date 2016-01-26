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
  ListView,
  PullToRefreshViewAndroid,
  StyleSheet,
} from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';
import TopicItem from './src/components/topic-item';

const MOCK_TOPICS = {"topics":[{"id":28583,"title":"Happy 2016! AMA - Ask Me Anything :)","created_at":"2015-12-31T23:42:19.117+08:00","updated_at":"2016-01-21T21:16:06.627+08:00","replied_at":"2016-01-21T21:16:06.595+08:00","replies_count":62,"node_name":"分享","node_id":26,"last_reply_user_id":188,"last_reply_user_login":"fredwu","user":{"id":188,"login":"fredwu","name":"Fred Wu","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/188.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28553,"title":"通过「刻意练习」，你才能成为顶尖的程序员","created_at":"2015-12-28T19:09:09.365+08:00","updated_at":"2016-01-24T17:31:06.405+08:00","replied_at":"2016-01-24T17:31:06.391+08:00","replies_count":40,"node_name":"分享","node_id":26,"last_reply_user_id":24144,"last_reply_user_login":"rubyfan1","user":{"id":5196,"login":"seabornlee","name":"李小波","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/5196.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28550,"title":"Phoenix render 迷思","created_at":"2015-12-28T11:36:08.322+08:00","updated_at":"2016-01-22T22:31:29.034+08:00","replied_at":"2016-01-22T22:31:29.024+08:00","replies_count":14,"node_name":"Erlang/Elixir","node_id":35,"last_reply_user_id":2806,"last_reply_user_login":"ntsai","user":{"id":2575,"login":"darkbaby123","name":"陈璋","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/2575.jpeg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28538,"title":"Breaking Up a Monolithic Rails App Without MicroService","created_at":"2015-12-27T09:48:43.694+08:00","updated_at":"2016-01-23T16:55:04.083+08:00","replied_at":"2016-01-23T10:57:00.649+08:00","replies_count":8,"node_name":"Rails","node_id":2,"last_reply_user_id":170,"last_reply_user_login":"fleuria","user":{"id":13903,"login":"hooopo","name":"Hooopo","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/13903.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28487,"title":"应届生求个实习职位，怎么就这么难啊？求支招！","created_at":"2015-12-22T13:47:28.344+08:00","updated_at":"2016-01-24T17:53:38.189+08:00","replied_at":"2016-01-24T17:53:38.177+08:00","replies_count":66,"node_name":"求职","node_id":64,"last_reply_user_id":24144,"last_reply_user_login":"rubyfan1","user":{"id":12834,"login":"hemengzhi88","name":"何孟知","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/12834.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28453,"title":"Bundler 到底是怎么工作的 (暨 Ruby 依赖管理历史回顾)","created_at":"2015-12-18T16:18:37.814+08:00","updated_at":"2016-01-23T21:35:50.657+08:00","replied_at":"2016-01-23T21:35:50.644+08:00","replies_count":23,"node_name":"开源项目","node_id":47,"last_reply_user_id":21349,"last_reply_user_login":"tangjunin","user":{"id":756,"login":"psvr","name":"P.S.V.R","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/756.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28415,"title":"无人知晓的 GIL","created_at":"2015-12-16T18:20:31.418+08:00","updated_at":"2016-01-21T13:57:05.327+08:00","replied_at":"2016-01-01T20:22:34.909+08:00","replies_count":20,"node_name":"Ruby","node_id":1,"last_reply_user_id":9800,"last_reply_user_login":"pynix","user":{"id":1059,"login":"wadexing","name":"邢星","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1059.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28356,"title":"Heroku-style config management with capistrano and dotenv","created_at":"2015-12-12T09:39:09.896+08:00","updated_at":"2015-12-24T11:11:23.554+08:00","replied_at":"2015-12-18T23:30:09.947+08:00","replies_count":8,"node_name":"Rails","node_id":2,"last_reply_user_id":13903,"last_reply_user_login":"hooopo","user":{"id":13903,"login":"hooopo","name":"Hooopo","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/13903.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28355,"title":"测试的主要作用和必要体现在哪？","created_at":"2015-12-12T09:28:25.798+08:00","updated_at":"2016-01-22T21:18:34.118+08:00","replied_at":"2016-01-20T11:57:39.872+08:00","replies_count":40,"node_name":"新手问题","node_id":52,"last_reply_user_id":19982,"last_reply_user_login":"ethanyoung","user":{"id":23196,"login":"catherine","name":"Catherine","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/23196.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28295,"title":"Ember Data 概述","created_at":"2015-12-06T22:42:45.748+08:00","updated_at":"2016-01-19T17:52:19.677+08:00","replied_at":"2015-12-23T17:57:21.462+08:00","replies_count":16,"node_name":"EmberJS","node_id":73,"last_reply_user_id":1164,"last_reply_user_login":"jesktop","user":{"id":1573,"login":"nightire","name":"Albert Yu","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1573.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28230,"title":"[Thinking in Ember 2] 组件化的探索——路漫漫其修远兮，还得 Up \u0026 Down 啊～","created_at":"2015-11-28T17:08:20.657+08:00","updated_at":"2015-12-27T21:58:26.050+08:00","replied_at":"2015-12-13T16:16:27.733+08:00","replies_count":11,"node_name":"EmberJS","node_id":73,"last_reply_user_id":1573,"last_reply_user_login":"nightire","user":{"id":1573,"login":"nightire","name":"Albert Yu","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1573.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28209,"title":"为什么 Ruby 程序员应该了解和掌握 Docker","created_at":"2015-11-27T02:02:36.810+08:00","updated_at":"2016-01-19T17:47:16.667+08:00","replied_at":"2015-12-14T00:30:57.412+08:00","replies_count":28,"node_name":"瞎扯淡","node_id":27,"last_reply_user_id":244,"last_reply_user_login":"fsword","user":{"id":244,"login":"fsword","name":"淘李福","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/244.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28127,"title":"画说 Ruby 与 Python 垃圾回收","created_at":"2015-11-20T14:14:07.220+08:00","updated_at":"2016-01-15T13:53:37.688+08:00","replied_at":"2016-01-06T13:21:03.423+08:00","replies_count":19,"node_name":"Ruby","node_id":1,"last_reply_user_id":24448,"last_reply_user_login":"u1452056514","user":{"id":1059,"login":"wadexing","name":"邢星","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1059.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28104,"title":"千万别构建超过 23 个字符的 Ruby 字符串","created_at":"2015-11-18T17:14:44.641+08:00","updated_at":"2016-01-19T17:48:49.965+08:00","replied_at":"2016-01-19T17:35:59.980+08:00","replies_count":19,"node_name":"Ruby","node_id":1,"last_reply_user_id":24660,"last_reply_user_login":"elgs","user":{"id":1059,"login":"wadexing","name":"邢星","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1059.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28040,"title":"Ruby 是如何解释运行程序的","created_at":"2015-11-13T09:28:11.022+08:00","updated_at":"2016-01-23T10:59:52.857+08:00","replied_at":"2015-12-28T13:05:13.943+08:00","replies_count":19,"node_name":"翻译","node_id":68,"last_reply_user_id":24262,"last_reply_user_login":"yunheli","user":{"id":3790,"login":"qinfanpeng","name":"qinfanpeng","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/3790.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28015,"title":"Redis 实现自动输入完成","created_at":"2015-11-10T23:21:37.675+08:00","updated_at":"2016-01-23T09:32:12.131+08:00","replied_at":"2015-12-13T10:32:43.695+08:00","replies_count":16,"node_name":"Rails","node_id":2,"last_reply_user_id":15420,"last_reply_user_login":"pathbox","user":{"id":16154,"login":"hfpp2012","name":"阳明","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/16154.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27985,"title":"Cjsx 还是挺好使的...","created_at":"2015-11-07T09:34:52.429+08:00","updated_at":"2015-12-01T12:03:26.937+08:00","replied_at":"2015-11-12T23:40:56.025+08:00","replies_count":7,"node_name":"ReactJS","node_id":72,"last_reply_user_id":11856,"last_reply_user_login":"hanji","user":{"id":2880,"login":"luikore","name":"Zete","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/2880.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27956,"title":"用 Ruby 快速开发一个静态服务全过程","created_at":"2015-11-05T10:17:02.166+08:00","updated_at":"2016-01-19T17:55:26.086+08:00","replied_at":"2015-12-17T13:18:35.509+08:00","replies_count":18,"node_name":"Sinatra","node_id":43,"last_reply_user_id":24078,"last_reply_user_login":"lpgray","user":{"id":10654,"login":"vincenting","name":"丁文森","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/10654.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27939,"title":"Redis 实现 Cache 系统实践","created_at":"2015-11-04T09:53:31.281+08:00","updated_at":"2016-01-21T18:45:48.656+08:00","replied_at":"2015-12-16T14:53:29.806+08:00","replies_count":13,"node_name":"Rails","node_id":2,"last_reply_user_id":24049,"last_reply_user_login":"rickliu","user":{"id":16154,"login":"hfpp2012","name":"阳明","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/16154.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27912,"title":"How Minitest works","created_at":"2015-11-01T19:17:43.746+08:00","updated_at":"2016-01-11T22:26:46.842+08:00","replied_at":"2015-11-08T20:06:22.957+08:00","replies_count":8,"node_name":"Testing","node_id":37,"last_reply_user_id":6553,"last_reply_user_login":"zzz6519003","user":{"id":1638,"login":"xiaoronglv","name":"吕小荣","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1638.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}}]}

import Drawer from 'react-native-drawer';
var Sidebar = require('./src/components/sidebar')

class rubyChina extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      isRefreshing: false,
      dataSource: ds.cloneWithRows(MOCK_TOPICS.topics)
    }
  }

  closeControlPanel(){
    this.refs.drawer.close()
  }
  openControlPanel(){
    this.refs.drawer.open()
  }

  onRefresh(){

  }
  handleNavIconClick(){
    this.refs.drawer.open()
  }

  render(){
    return <Drawer
              ref="drawer"
              type="overlay"
              tapToClose={true}
              content={<Sidebar />}
              openDrawerOffset={0.3}
              panCloseMask={0.2}
              closedDrawerOffset={-3}
              negotiatePan={true}
              styles={{main: {shadowColor: "#000000", shadowOpacity: 0.4, shadowRadius: 3}}}
              tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})} >

      <View style={styles.container}>
        <ToolbarAndroid
            actions={[{title:'a', show: 'always'}]}
            navIcon={require('./assets/ic_menu_black_48dp.png')}
            onIconClicked={this.handleNavIconClick.bind(this)}
            style={styles.toolbar} />
        <PullToRefreshViewAndroid
          style={{flex:1}}
          refreshing={this.state.isRefreshing}
          progressBackgroundColor={'#FFCCBC'}
          onRefresh={this.onRefresh}
          colors={['#ff0000', '#00ff00', '#0000ff']}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(item)=>{
              return <TopicItem item={item} />
            }} />
        </PullToRefreshViewAndroid>
    </View>
    </Drawer>
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
});

AppRegistry.registerComponent('rubyChina', () => rubyChina);

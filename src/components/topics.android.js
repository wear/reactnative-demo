'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  ListView,
  ToastAndroid,
  NetInfo,
  PullToRefreshViewAndroid,
  View
} from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';
import Drawer from 'react-native-drawer';
import Sidebar from './sidebar';
import TopicItem from './topic-item';
import Spinner from 'react-native-loading-spinner-overlay';

const MOCK_TOPICS = {"topics":[{"id":28583,"title":"Happy 2016! AMA - Ask Me Anything :)","created_at":"2015-12-31T23:42:19.117+08:00","updated_at":"2016-01-21T21:16:06.627+08:00","replied_at":"2016-01-21T21:16:06.595+08:00","replies_count":62,"node_name":"分享","node_id":26,"last_reply_user_id":188,"last_reply_user_login":"fredwu","user":{"id":188,"login":"fredwu","name":"Fred Wu","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/188.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28553,"title":"通过「刻意练习」，你才能成为顶尖的程序员","created_at":"2015-12-28T19:09:09.365+08:00","updated_at":"2016-01-24T17:31:06.405+08:00","replied_at":"2016-01-24T17:31:06.391+08:00","replies_count":40,"node_name":"分享","node_id":26,"last_reply_user_id":24144,"last_reply_user_login":"rubyfan1","user":{"id":5196,"login":"seabornlee","name":"李小波","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/5196.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28550,"title":"Phoenix render 迷思","created_at":"2015-12-28T11:36:08.322+08:00","updated_at":"2016-01-22T22:31:29.034+08:00","replied_at":"2016-01-22T22:31:29.024+08:00","replies_count":14,"node_name":"Erlang/Elixir","node_id":35,"last_reply_user_id":2806,"last_reply_user_login":"ntsai","user":{"id":2575,"login":"darkbaby123","name":"陈璋","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/2575.jpeg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28538,"title":"Breaking Up a Monolithic Rails App Without MicroService","created_at":"2015-12-27T09:48:43.694+08:00","updated_at":"2016-01-23T16:55:04.083+08:00","replied_at":"2016-01-23T10:57:00.649+08:00","replies_count":8,"node_name":"Rails","node_id":2,"last_reply_user_id":170,"last_reply_user_login":"fleuria","user":{"id":13903,"login":"hooopo","name":"Hooopo","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/13903.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28487,"title":"应届生求个实习职位，怎么就这么难啊？求支招！","created_at":"2015-12-22T13:47:28.344+08:00","updated_at":"2016-01-24T17:53:38.189+08:00","replied_at":"2016-01-24T17:53:38.177+08:00","replies_count":66,"node_name":"求职","node_id":64,"last_reply_user_id":24144,"last_reply_user_login":"rubyfan1","user":{"id":12834,"login":"hemengzhi88","name":"何孟知","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/12834.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28453,"title":"Bundler 到底是怎么工作的 (暨 Ruby 依赖管理历史回顾)","created_at":"2015-12-18T16:18:37.814+08:00","updated_at":"2016-01-23T21:35:50.657+08:00","replied_at":"2016-01-23T21:35:50.644+08:00","replies_count":23,"node_name":"开源项目","node_id":47,"last_reply_user_id":21349,"last_reply_user_login":"tangjunin","user":{"id":756,"login":"psvr","name":"P.S.V.R","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/756.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28415,"title":"无人知晓的 GIL","created_at":"2015-12-16T18:20:31.418+08:00","updated_at":"2016-01-21T13:57:05.327+08:00","replied_at":"2016-01-01T20:22:34.909+08:00","replies_count":20,"node_name":"Ruby","node_id":1,"last_reply_user_id":9800,"last_reply_user_login":"pynix","user":{"id":1059,"login":"wadexing","name":"邢星","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1059.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28356,"title":"Heroku-style config management with capistrano and dotenv","created_at":"2015-12-12T09:39:09.896+08:00","updated_at":"2015-12-24T11:11:23.554+08:00","replied_at":"2015-12-18T23:30:09.947+08:00","replies_count":8,"node_name":"Rails","node_id":2,"last_reply_user_id":13903,"last_reply_user_login":"hooopo","user":{"id":13903,"login":"hooopo","name":"Hooopo","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/13903.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28355,"title":"测试的主要作用和必要体现在哪？","created_at":"2015-12-12T09:28:25.798+08:00","updated_at":"2016-01-22T21:18:34.118+08:00","replied_at":"2016-01-20T11:57:39.872+08:00","replies_count":40,"node_name":"新手问题","node_id":52,"last_reply_user_id":19982,"last_reply_user_login":"ethanyoung","user":{"id":23196,"login":"catherine","name":"Catherine","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/23196.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28295,"title":"Ember Data 概述","created_at":"2015-12-06T22:42:45.748+08:00","updated_at":"2016-01-19T17:52:19.677+08:00","replied_at":"2015-12-23T17:57:21.462+08:00","replies_count":16,"node_name":"EmberJS","node_id":73,"last_reply_user_id":1164,"last_reply_user_login":"jesktop","user":{"id":1573,"login":"nightire","name":"Albert Yu","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1573.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28230,"title":"[Thinking in Ember 2] 组件化的探索——路漫漫其修远兮，还得 Up \u0026 Down 啊～","created_at":"2015-11-28T17:08:20.657+08:00","updated_at":"2015-12-27T21:58:26.050+08:00","replied_at":"2015-12-13T16:16:27.733+08:00","replies_count":11,"node_name":"EmberJS","node_id":73,"last_reply_user_id":1573,"last_reply_user_login":"nightire","user":{"id":1573,"login":"nightire","name":"Albert Yu","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1573.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28209,"title":"为什么 Ruby 程序员应该了解和掌握 Docker","created_at":"2015-11-27T02:02:36.810+08:00","updated_at":"2016-01-19T17:47:16.667+08:00","replied_at":"2015-12-14T00:30:57.412+08:00","replies_count":28,"node_name":"瞎扯淡","node_id":27,"last_reply_user_id":244,"last_reply_user_login":"fsword","user":{"id":244,"login":"fsword","name":"淘李福","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/244.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28127,"title":"画说 Ruby 与 Python 垃圾回收","created_at":"2015-11-20T14:14:07.220+08:00","updated_at":"2016-01-15T13:53:37.688+08:00","replied_at":"2016-01-06T13:21:03.423+08:00","replies_count":19,"node_name":"Ruby","node_id":1,"last_reply_user_id":24448,"last_reply_user_login":"u1452056514","user":{"id":1059,"login":"wadexing","name":"邢星","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1059.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28104,"title":"千万别构建超过 23 个字符的 Ruby 字符串","created_at":"2015-11-18T17:14:44.641+08:00","updated_at":"2016-01-19T17:48:49.965+08:00","replied_at":"2016-01-19T17:35:59.980+08:00","replies_count":19,"node_name":"Ruby","node_id":1,"last_reply_user_id":24660,"last_reply_user_login":"elgs","user":{"id":1059,"login":"wadexing","name":"邢星","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1059.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28040,"title":"Ruby 是如何解释运行程序的","created_at":"2015-11-13T09:28:11.022+08:00","updated_at":"2016-01-23T10:59:52.857+08:00","replied_at":"2015-12-28T13:05:13.943+08:00","replies_count":19,"node_name":"翻译","node_id":68,"last_reply_user_id":24262,"last_reply_user_login":"yunheli","user":{"id":3790,"login":"qinfanpeng","name":"qinfanpeng","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/3790.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":28015,"title":"Redis 实现自动输入完成","created_at":"2015-11-10T23:21:37.675+08:00","updated_at":"2016-01-23T09:32:12.131+08:00","replied_at":"2015-12-13T10:32:43.695+08:00","replies_count":16,"node_name":"Rails","node_id":2,"last_reply_user_id":15420,"last_reply_user_login":"pathbox","user":{"id":16154,"login":"hfpp2012","name":"阳明","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/16154.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27985,"title":"Cjsx 还是挺好使的...","created_at":"2015-11-07T09:34:52.429+08:00","updated_at":"2015-12-01T12:03:26.937+08:00","replied_at":"2015-11-12T23:40:56.025+08:00","replies_count":7,"node_name":"ReactJS","node_id":72,"last_reply_user_id":11856,"last_reply_user_login":"hanji","user":{"id":2880,"login":"luikore","name":"Zete","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/2880.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27956,"title":"用 Ruby 快速开发一个静态服务全过程","created_at":"2015-11-05T10:17:02.166+08:00","updated_at":"2016-01-19T17:55:26.086+08:00","replied_at":"2015-12-17T13:18:35.509+08:00","replies_count":18,"node_name":"Sinatra","node_id":43,"last_reply_user_id":24078,"last_reply_user_login":"lpgray","user":{"id":10654,"login":"vincenting","name":"丁文森","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/10654.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27939,"title":"Redis 实现 Cache 系统实践","created_at":"2015-11-04T09:53:31.281+08:00","updated_at":"2016-01-21T18:45:48.656+08:00","replied_at":"2015-12-16T14:53:29.806+08:00","replies_count":13,"node_name":"Rails","node_id":2,"last_reply_user_id":24049,"last_reply_user_login":"rickliu","user":{"id":16154,"login":"hfpp2012","name":"阳明","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/16154.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}},{"id":27912,"title":"How Minitest works","created_at":"2015-11-01T19:17:43.746+08:00","updated_at":"2016-01-11T22:26:46.842+08:00","replied_at":"2015-11-08T20:06:22.957+08:00","replies_count":8,"node_name":"Testing","node_id":37,"last_reply_user_id":6553,"last_reply_user_login":"zzz6519003","user":{"id":1638,"login":"xiaoronglv","name":"吕小荣","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1638.jpg"},"deleted":false,"excellent":true,"abilities":{"update":false,"destroy":false}}]}
const MOCK_NODES = {"nodes":[{"id":1,"name":"Ruby","topics_count":1988,"summary":"Ruby 是一门优美的语言","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.627+08:00"},{"id":3,"name":"Gem","topics_count":1087,"summary":"在这里讨论 Ruby Gem，分享使用心得，发现有趣实用的 Gem","section_id":1,"sort":97,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.668+08:00"},{"id":4,"name":"Python","topics_count":30,"summary":"关于 Python 的话题，虽然这里是 Ruby 社区，但是我们偶尔也可以聊聊 Python。","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-03-01T22:35:21.673+08:00"},{"id":5,"name":"JavaScript","topics_count":399,"summary":"关于 Javascript 前端开发的一些话题。\r\n\r\n注意！此栏目只接受前端有关的 JavaScript 讨论话题，Node.js 的内容请发到 Node.js 节点。","section_id":8,"sort":0,"section_name":"Front-End","updated_at":"2015-10-23T12:03:50.955+08:00"},{"id":9,"name":"MongoDB","topics_count":137,"summary":"MongoDB 数据库，目前最热门的 NoSQL 数据库。","section_id":2,"sort":-18,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.688+08:00"},{"id":10,"name":"Redis","topics_count":44,"summary":"...","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.693+08:00"},{"id":11,"name":"Git","topics_count":181,"summary":"Git 版本管理工具，以及一些版本管理的技巧讨论。","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.699+08:00"},{"id":12,"name":"Database","topics_count":126,"summary":"MySQL, SQLite, PostgresSQL, MongoDB ... 所有一切和数据库相关的话题讨论。","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.704+08:00"},{"id":17,"name":"Linux","topics_count":111,"summary":"...","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.710+08:00"},{"id":18,"name":"Nginx","topics_count":56,"summary":"...","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.715+08:00"},{"id":20,"name":"云服务","topics_count":200,"summary":"这是云时代！（本网站使用 UCloud 云主机以及 UPYun 云存储）","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:22.004+08:00"},{"id":23,"name":"社区开发","topics_count":226,"summary":"注意，这个节点是用于讨论 ruby-china 开发，以及项目技术的话题。","section_id":3,"sort":0,"section_name":"Ruby China","updated_at":"2015-03-01T22:35:21.734+08:00"},{"id":24,"name":"工具控","topics_count":937,"summary":"分享好用的工具，软件，线上软件等等。","section_id":4,"sort":20,"section_name":"分享","updated_at":"2015-03-01T22:35:21.742+08:00"},{"id":28,"name":"其他","topics_count":272,"summary":"无法确定的东西，发在这里。","section_id":4,"sort":-999,"section_name":"分享","updated_at":"2015-03-01T22:35:21.784+08:00"},{"id":29,"name":"重构","topics_count":59,"summary":"我们要写出更佳漂亮的 Ruby Code","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.795+08:00"},{"id":30,"name":"产品控","topics_count":103,"summary":"分享新发现的互联网产品。","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-03-01T22:35:21.802+08:00"},{"id":31,"name":"RubyTuesday","topics_count":181,"summary":"RubyTuesday 是来自台湾的一个习惯，大家会再周二晚上聚在一起聊关于 Ruby 的话题。","section_id":7,"sort":0,"section_name":"活动","updated_at":"2015-03-01T22:35:21.808+08:00"},{"id":32,"name":"iOS","topics_count":82,"summary":"关于Apple的iOS，iPhone，iPad开发方面的话题。","section_id":5,"sort":0,"section_name":"Mobile","updated_at":"2015-06-28T20:06:58.475+08:00"},{"id":33,"name":"Android","topics_count":21,"summary":"关于Android开发的话题。","section_id":5,"sort":0,"section_name":"Mobile","updated_at":"2015-03-01T22:35:21.818+08:00"},{"id":34,"name":"Go","topics_count":41,"summary":"来自 Google 的语言，相信有很多人感兴趣吧","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-03-01T22:35:21.824+08:00"},{"id":35,"name":"Erlang/Elixir","topics_count":30,"summary":"Erlang 是一种面向并发的通用编程语言 http://www.erlang.org\r\nElixir 是基于 Erlang VM 的语言 http://elixir-lang.org","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-09-24T01:41:16.964+08:00"},{"id":37,"name":"Testing","topics_count":247,"summary":"TDD, BDD ...","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.834+08:00"},{"id":38,"name":"书籍","topics_count":163,"summary":"我爱阅读","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-03-01T22:35:21.840+08:00"},{"id":39,"name":"搜索分词","topics_count":35,"summary":"每个网站都必然需要的东西。","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.845+08:00"},{"id":40,"name":"算法","topics_count":61,"summary":"执着寻找高效的算法","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.850+08:00"},{"id":41,"name":"CSS","topics_count":97,"summary":"CSS, SASS, SCSS 方面的东西。","section_id":8,"sort":0,"section_name":"Front-End","updated_at":"2015-06-28T20:01:08.143+08:00"},{"id":42,"name":"Mac","topics_count":228,"summary":"Mac OS X 方面的讨论。","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-03-01T22:35:21.862+08:00"},{"id":43,"name":"Sinatra","topics_count":103,"summary":"Sinatra Web 框架","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.867+08:00"},{"id":44,"name":"部署","topics_count":787,"summary":"产品部署方面的讨论。","section_id":1,"sort":10,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.875+08:00"},{"id":45,"name":"RVM/Rbenv","topics_count":83,"summary":"Ruby Version Manager 工具的一些讨论。","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-06-29T11:35:30.851+08:00"},{"id":46,"name":"Mailer","topics_count":11,"summary":"邮件发送以及一些基于邮件的功能开发技术讨论。","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.885+08:00"},{"id":47,"name":"开源项目","topics_count":322,"summary":"分享开源项目，和讨论一些开源项目的设计与使用。","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.891+08:00"},{"id":48,"name":"Obj-C","topics_count":16,"summary":"Mac OS X 与 iOS 开发","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-06-29T11:34:32.206+08:00"},{"id":50,"name":"插画 / 设计","topics_count":23,"summary":"会做设计或画画的 Ruby 程序员们，来分享你的作品","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-11-17T14:22:03.749+08:00"},{"id":51,"name":"RubyConf","topics_count":188,"summary":"在这个节点讨论 Ruby Conference 的相关话题。","section_id":7,"sort":0,"section_name":"活动","updated_at":"2015-03-01T22:35:21.907+08:00"},{"id":53,"name":"数学","topics_count":13,"summary":"数学","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-06-28T20:04:02.639+08:00"},{"id":54,"name":"JRuby","topics_count":34,"summary":"JRuby 讨论区","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.947+08:00"},{"id":55,"name":"运维","topics_count":59,"summary":"服务器运维方面的技术讨论节点","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.954+08:00"},{"id":56,"name":"创业","topics_count":103,"summary":"创业","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-03-01T22:35:21.964+08:00"},{"id":58,"name":"Clojure","topics_count":15,"summary":"Clojure","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-03-01T22:35:21.980+08:00"},{"id":59,"name":"Haskell","topics_count":10,"summary":"Haskell","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-03-01T22:35:21.987+08:00"},{"id":60,"name":"安全","topics_count":51,"summary":"Web Security","section_id":2,"sort":0,"section_name":"Back-End","updated_at":"2015-03-01T22:35:21.994+08:00"},{"id":22,"name":"反馈","topics_count":336,"summary":"使用过程中遇到了问题，可以在这里提交。","section_id":3,"sort":0,"section_name":"Ruby China","updated_at":"2015-03-01T22:35:21.727+08:00"},{"id":57,"name":"线下活动","topics_count":261,"summary":"其他线下活动","section_id":7,"sort":0,"section_name":"活动","updated_at":"2015-03-01T22:35:21.973+08:00"},{"id":2,"name":"Rails","topics_count":3629,"summary":"Ruby on Rails, 也称 Rails, 是一个使用 Ruby 语言写的开源 Web 开发框架。","section_id":1,"sort":98,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.657+08:00"},{"id":21,"name":"公告","topics_count":106,"summary":"本站公布消息专用，大家别乱发到这里哦","section_id":3,"sort":0,"section_name":"Ruby China","updated_at":"2015-03-01T22:35:21.721+08:00"},{"id":26,"name":"分享","topics_count":1906,"summary":"发现好玩的东西，发出来和大家分享。","section_id":4,"sort":90,"section_name":"分享","updated_at":"2015-03-01T22:35:21.756+08:00"},{"id":52,"name":"新手问题","topics_count":4833,"summary":"新手问题区","section_id":1,"sort":99999,"section_name":"Ruby","updated_at":"2015-03-01T22:35:21.936+08:00"},{"id":62,"name":"移民","topics_count":18,"summary":"讨论移民的话题","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-03-01T22:35:21.999+08:00"},{"id":63,"name":"健康","topics_count":30,"summary":"关注开发者健康","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-03-01T22:35:22.010+08:00"},{"id":64,"name":"求职","topics_count":75,"summary":"千里马寻伯乐","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-11-06T20:46:11.420+08:00"},{"id":66,"name":"mRuby","topics_count":5,"summary":"Lightweight Ruby https://github.com/mruby/mruby","section_id":1,"sort":0,"section_name":"Ruby","updated_at":"2015-03-01T22:35:22.042+08:00"},{"id":67,"name":"Swift","topics_count":21,"summary":"Swift 语言","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-03-01T22:35:22.048+08:00"},{"id":68,"name":"翻译","topics_count":12,"summary":"技术文章翻译，请贴原文。\r\n\r\n建议标题用英文的原文标题，这样其他人容易搜索到。","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-04-24T01:18:38.156+08:00"},{"id":69,"name":"产品推广","topics_count":18,"summary":"如果你是 Ruby China 的活跃会员，你可以适当在这里推广你的产品。\r\n\r\n#### 一些要求\r\n\r\n- 你得是 Ruby China 的活跃会员或是 Ruby 社区的活跃分子；\r\n- 排版整洁；\r\n- 说清楚你的 App，网站是做什么的；\r\n- 你的产品受众群得是和技术人员有关的；\r\n","section_id":4,"sort":0,"section_name":"分享","updated_at":"2015-04-24T14:40:20.546+08:00"},{"id":70,"name":"Rust","topics_count":4,"summary":"http://www.rust-lang.org/","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-05-16T01:17:56.964+08:00"},{"id":71,"name":"AngularJS","topics_count":5,"summary":"AngularJS","section_id":8,"sort":0,"section_name":"Front-End","updated_at":"2015-06-28T20:05:08.586+08:00"},{"id":72,"name":"ReactJS","topics_count":7,"summary":"ReactJS","section_id":8,"sort":0,"section_name":"Front-End","updated_at":"2015-06-28T20:05:21.057+08:00"},{"id":73,"name":"EmberJS","topics_count":20,"summary":"EmberJS","section_id":8,"sort":0,"section_name":"Front-End","updated_at":"2015-06-28T20:06:14.101+08:00"},{"id":74,"name":"RubyMotion","topics_count":3,"summary":"http://www.rubymotion.com","section_id":5,"sort":0,"section_name":"Mobile","updated_at":"2015-10-12T23:59:20.201+08:00"},{"id":75,"name":"Node.js","topics_count":6,"summary":"Node.js 开发相关的话题","section_id":6,"sort":0,"section_name":"Languages","updated_at":"2015-10-23T11:58:49.990+08:00"},{"id":27,"name":"瞎扯淡","topics_count":2842,"summary":"其实这个全称叫“瞎鸡巴扯淡”","section_id":4,"sort":90,"section_name":"分享","updated_at":"2015-03-01T22:35:21.771+08:00"},{"id":25,"name":"招聘","topics_count":1924,"summary":"**招聘栏目规则：**《[敬告各位发招聘的公司注意！](https://ruby-china.org/topics/25579)》请仔细阅读!\r\n\r\n-----------\r\n\r\n如果没有发帖权限，请邮件联系 [admin@ruby-china.org](mailto:admin@ruby-china.org) 并注明主题：请开通发布招聘帖权限\r\n\r\n\r\n","section_id":4,"sort":100,"section_name":"分享","updated_at":"2015-12-21T12:45:03.829+08:00"},{"id":61,"name":"NoPoint","topics_count":234,"summary":"以下几种情况的帖子可能会进入此节点：\r\n\r\n1. 标题/正文描述不清不楚;\r\n1. 无意义的发帖;\r\n1. 存在广告嫌疑；\r\n1. 招聘信息描述不清楚，未按照招聘节点的要求发帖，或职位信息不符合社区用户群需求；\r\n1. 新注册的帐号发布产品推广贴是不允许的哦，付出和回报是相等的，当然如果你的产品确实非常有意思，或是和 Ruby 有关的东西，是不会进入这个栏目的。\r\n1. 太过弱的提问会被直接转移到此节点，请在提问前多尝试，多搜索；\r\n1. 理论上，不允许发布 QQ 群、微信群之类讨论群。\r\n\r\n---\r\n\r\n如果你发现你的帖子到了此节点下面，请自我检查反省，并修改帖子内容。\r\n\r\n----\r\n\r\n**招聘贴被转移到此节点原因**\r\n\r\n警告: 以后招聘贴不符合要求，直接移动到本节点，管理员不再回复，如认真阅读，继续新发同样格式的贴，将会被禁用账号！\r\n\r\n- 排版请按 Ruby China 的 Markdown 格式要求，具体请认真阅读: [排版指导](https://ruby-china.org/markdown)，并参考 [这篇招聘](https://ruby-china.org/topics/21144) 的排版;\r\n- 招聘内容过少，缺少公司介绍，产品介绍，职位介绍，或待遇，工作地，联系方式等必要信息；\r\n- 重复发帖（一家公司每月限制只能发一次招聘）；\r\n- 专业不对口（个别不对口，但有特点的，我们会放过）；\r\n\r\n如果你有时间，请阅读 [招聘栏目详细说明](https://ruby-china.org/topics/25579)\r\n\r\n----\r\n\r\n学会如何合理提问，请阅读：https://ruby-china.org/topics/24325\r\n\r\n当你修改好以后，可以回帖 @huacnlee、@Rei、@lgn21st 任何一人，我们将会审核，通过以后才可恢复到其他节点。\r\n\r\n注！多次发现广告嫌疑的帐号，将会被禁用帐号。\r\n\r\n","section_id":3,"sort":0,"section_name":"Ruby China","updated_at":"2015-11-22T17:07:18.517+08:00"}],"meta":{"total":64}}
const nodesAsActionItems = [{title:'全部',show:'always'}].concat(MOCK_NODES.nodes.sort((a,b)=>{
          return parseInt(b.topics_count) - parseInt(a.topics_count);
        }).map((node, index)=>{
          return {id: node.id, title: node.name, show:(index > 5 ? 'never' : 'ifRoom')}
        }))

export default class Topic extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      currentNode: nodesAsActionItems[0],
      isRefreshing: false,
      loading: false,
      dataSource: ds.cloneWithRows(MOCK_TOPICS.topics)
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    return this.state.loading != nextState.loading
  }
  componentDidMount() {
    NetInfo.isConnected.fetch().done((isConnected) => {
      if(!isConnected){
        ToastAndroid.show('未联网',ToastAndroid.SHORT)
      } else {
        this.getTopics('type=excellent')
      }
    })
  }

  getTopics(urlParams){
    this.setState({
      loading: true
    });

    const baseUrl = "https://ruby-china.org/api/v3/topics.json?";
    const url = baseUrl + urlParams;

    fetch(url)
      .then((response)=>response.json())
      .then((data)=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(data.topics)
        });
      })
      .catch((e)=>{
        ToastAndroid.show(e.message, ToastAndroid.SHORT)
      })
      .done(()=>{
        this.setState({
          loading: false
        });
      })
  }

  onRefresh(){

  }
  handleNavIconClick(){
    this.refs.drawer.open()
  }
  onActionSelected(position){
    this.setState({
      currentNode: nodesAsActionItems[position]
    });

    let params = this.state.currentNode.title == '全部' ? 'type=excellent' : ('node_id='+this.state.currentNode.id)
    this.getTopics(params)
  }
  render(){
    const {route, navigator} = this.props;

    return <View style={styles.container}>
          <ToolbarAndroid
              actions={nodesAsActionItems}
              onActionSelected={this.onActionSelected.bind(this)}
              title={this.state.currentNode.title}
              style={styles.toolbar} />
          <PullToRefreshViewAndroid
            style={{flex:1}}
            refreshing={this.state.isRefreshing}
            progressBackgroundColor={'#FFCCBC'}
            onRefresh={this.onRefresh}
            colors={['#E64A19', '#00ff00', '#0000ff']}>
            <ListView
              style={{backgroundColor:'#3f474d'}}
              dataSource={this.state.dataSource}
              renderRow={(item)=>{
                return <TopicItem item={item} route={route} navigator={navigator} />
              }} />
          </PullToRefreshViewAndroid>
          <Spinner visible={this.state.loading} size='normal' />
        </View>
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3ebdIS2Hyt0QDL7A4_QJC0Nuu6lK6jUE",
  authDomain: "firereactbasenative.firebaseapp.com",
  databaseURL: "https://firereactbasenative.firebaseio.com",
  storageBucket: "",
};
// const firebaseConfig = {
//   apiKey: "<your-api-key>",
//   authDomain: "<your-auth-domain>",
//   databaseURL: "<your-database-url>",
//   storageBucket: "<your-storage-bucket>",
// };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = require('./styles.js');
const StatusBar = require('./components/StatusBar.js');
const ListItem = require('./components/ListItem.js');
const ActionButton = require('./components/ActionButton.js');

class Greeting extends Component {
  render() {
    return (
      <Text>Sup {this.props.name}</Text>
    );
  }
}

class Tutorial extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>sup</Text>
        <Greeting name="Reed" />
        <Image source={pic} style={{width: 200, height: 100}}/>
      </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}

// class Tutorial extends Component {
//   constructor(props) {
//     super(props);
//     this.itemsRef = firebaseApp.database().ref();
//     this.state = {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       })
//     };
//   }

//   _renderItem(item) {
//     return (
//       <ListItem item="{item}" onpress={"()" ==""> {}} />
//     );
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//       <StatusBar title="Grocery List" />
//         <ListView datasource={this.state.dataSource} renderrow={this._renderItem.bind(this)} style={styles.listview} />
//       <ActionButton title="Add" onpress={"()" ==""> {}} />
//       </View>
//     );
//   }

//   listenForItems(itemsRef) {
//     itemsRef.on('value', (snap) => {

//       // get children as an array
//       var items = [];
//       snap.forEach((child) => {
//         items.push({
//           title: child.val().title,
//           _key: child.key
//         });
//       });

//       this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(items)
//       });

//     });
//   }

//   componentDidMount() {
//     this.listenForItems(this.itemsRef);
//     // this.setState({
//     //   dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
//     // })
//   }

//   // render() {
//   //   return (
//   //       <View style={styles.container}>
//   //       <Text> sup </Text>
//   //       </View>
//   //   );
//   // }

// }

AppRegistry.registerComponent('Tutorial', () => Tutorial);

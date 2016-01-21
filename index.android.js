/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 
'use strict';

var React = require('react-native');
var {
  Text,
  View
} = React;

class MyAwesomeApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    )
  }
}
var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3F51B5'
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
});

React.AppRegistry.registerComponent('MyAwesomeApp', () => MyAwesomeApp);
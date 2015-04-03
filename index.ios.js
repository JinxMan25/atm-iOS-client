/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var styles = React.StyleSheet.create({
  text: {
      color: 'white',
      backgroundColor: 'red',
      fontSize: 30,
      margin: 80,
      borderRadius: 10
    }
});

class PropertyFinderApp extends React.Component{
  render() {
      return <React.Text style={styles.text}>Hello world(Again)</React.Text>;
    }
}

React.AppRegistry.registerComponent('PropertyFinder', function(){ return PropertyFinderApp });

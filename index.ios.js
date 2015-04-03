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
    },
  container: {
    flex: 1
  }
});

class HelloWorld extends React.Component{
  render() {
      return <React.Text style={styles.text}>Hello world(Again)</React.Text>;
    }
}

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld
        }}/>
     );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function(){ return PropertyFinderApp });

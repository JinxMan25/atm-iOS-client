/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  text: {
      color: 'white',
      backgroundColor: 'red',
      fontSize: 30,
      margin: 80,
      borderRadius: 10
    },
  bar:{
    backgroundColor: 'black'
  },
  container: {
    flex: 1
  }
});


class atmClient extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'welcome'
    }
  }
  render() {
    return (
          <React.TabBarIOS barTintColor="black" tintColor="white" selectedTab={this.state.selectedTab}>
            <React.TabBarIOS.Item
              selected={this.state.selectedTab === 'welcome'}
              icon={{uri:'search'}}
              onPress={() => {
                  this.setState({
                      selectedTab: 'welcome',
                  });
              }}>
          <React.NavigatorIOS
                style={styles.container}
                tintColor="white"
                barTintColor="black"
                titleTextColor="white"
                initialRoute={{
                  component: SearchPage,
                  title: 'ATM'
                }}
              />
            </React.TabBarIOS.Item>
            <React.TabBarIOS.Item
              selected={this.state.selectedTab === 'more'}
              icon={{uri:'more'}}
              onPress={() => {
                    this.setState({
                        selectedTab: 'more',
                    });
              }}>
            </React.TabBarIOS.Item>
          </React.TabBarIOS>
        );
  }
}

React.AppRegistry.registerComponent('atmClient', () => atmClient);

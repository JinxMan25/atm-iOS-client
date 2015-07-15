'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  special: {
    flex: 1,
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

class SearchResults extends Component {
 
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings),
      message: '',
      position: 'absolute'
    };
  }

  componentWillMount(){
    if (this.props.listings == undefined || this.props.listings.length == 0){
      this.setState({message: 'No pictures near this area!',position:'relative'})
    } else {
    this.setState({message: '',position:'absolute'})
    }
  }
 
  renderRow(rowData, sectionID, rowID) {
    var img_url = "http://atm.samiulhuq.com/"+rowData.img_url;
    console.log(rowData);
    return (
     <View style={styles.container}>
     <Image style={{height:200}} 
            source={{uri: img_url}} />
        <View style={styles.heading}>
          <Text style={styles.title}>{rowData.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{rowData.upvotes}</Text>
        <Text style={styles.description}>{rowData.description}</Text>
      </View> 
    );
  }
 
  render() {
    console.log(this.props.listings);
    if (this.props.listings == []){
      console.log("empty!");
    }
    return (
      <View style={styles.special}>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}>
        </ListView>
        <View ref="no"style={{position:this.state.position,flex:1, flexDirection:'row',justifyContent:'center'}}>
          <Text>{this.state.message}</Text>
        </View>
      </View>
    );
  }
 
}

module.exports = SearchResults;

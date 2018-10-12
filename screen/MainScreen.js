import React, { Component } from 'react'
import { Text, View ,StyleSheet,ListView, Image, TouchableOpacity, RefreshControl } from 'react-native'
import Dimensions from 'Dimensions'
import { getData } from '../actions';
import { connect } from 'react-redux';

class MainScreen extends Component {

    _onRefresh = () => {
        this.props.getData();
    }

    _convertData = (reponse) => {
        return ds.cloneWithRows(reponse);
    }

    componentDidMount(){
        this.props.getData();
    }
    
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
            <Text style={styles.header_text}>Main Screen</Text>
        </View>
        <ListView contentContainerStyle = {styles.list}
                  enableEmptySections = {true}
                  refreshControl = {
                      <RefreshControl 
                            refreshing = {this.props.isFetching}
                            onRefresh = {this._onRefresh}
                      />
                  }
                  dataSource={this._convertData(this.props.data)}
                  renderRow={(rowData) => {
                      if(rowData!=null) {
                        return (
                            <TouchableOpacity style={styles.container_item}>
                              <Image source={{
                              uri: rowData.url.medium
                            }} 
                            style={styles.image_item} />
                            </TouchableOpacity>
                          
                        )
                      }
                      return ( <View style={styles.container_item} />)
                  } }/>
      </View>
    )
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const WIDTH_SCREEN = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    header: {
        width: '100%',
        height: 68,
        backgroundColor: '#02aa7b',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 10,
    },
    header_text: {
        fontSize: 18,
        color: '#fff',        
    },
    list: {
       justifyContent: 'flex-start',
       flexDirection: 'row',
       flexWrap: 'wrap',
       alignItems: 'flex-start'
    },
    container_item: {
        width: WIDTH_SCREEN/2,
        height: WIDTH_SCREEN/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image_item: {
        width: '100%',
        height: '100%',
    },
  });

  const mapStateToProps = state => {
    return {
        isFetching: state.movies.isFetching,
        data: state.movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () =>  {
           return dispatch(getData());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen)
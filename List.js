import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, ActivityIndicator , TouchableOpacity} from 'react-native';
import { actionCreators } from './ListRedux'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
  loading: state.list.loading,
  error: state.list.error,
  list: state.list.data, 
})

const extractKey = ({id}) => id

export class List extends Component {

  componentWillMount() {
    const {dispatch} = this.props

    dispatch(actionCreators.fetchList())
  }

  refresh = async () => {
    const {dispatch} = this.props

    // We can await the completion of dispatch, so long as we returned a promise.
    await dispatch(actionCreators.clearList())

    dispatch(actionCreators.fetchList())
  }
  
    onPressItem = (id) => {
        this.props.navigation.navigate('DetailsWindow', {itemId: id})
    } 

    renderItem = ({item}) => {
 
      return (
        <TouchableOpacity onPress={() => this.onPressItem(item.id)}>
            <Text style={styles.list}>
                {item.text}
            </Text>
           
        </TouchableOpacity>
      )
    }

  render() {
    const {list, loading, error} = this.props

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load List!
          </Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          data={list}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
            <TouchableOpacity
              style={styles.button}
              onPress={this.refresh}
            >
              <Text>
                Refresh
              </Text>
            </TouchableOpacity>
      </View>  
    )
  }
}  

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  list: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  image: {
    width: 20,
    height: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  }
})
export default connect(mapStateToProps)(List)
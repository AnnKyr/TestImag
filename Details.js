import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, Image} from 'react-native';
import { connect } from 'react-redux'
import { actionCreators } from './ListRedux'

const mapStateToProps = (state) => ({
  loading: state.details.loading,
  error: state.details.error,
  details: state.details.data, 
})
    
//    item = rows.find( function(element) {return (itemId == element.id)} )

export class Details extends Component {

  componentWillMount() {
    const {dispatch} = this.props
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');

    dispatch(actionCreators.fetchDetails(itemId))
  }

  render() {
    const {details, loading, error} = this.props

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
            Failed to load Details!
          </Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: details.image}}
            />
            <Text> {details.moretext}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },

  })

export default connect(mapStateToProps)(Details)
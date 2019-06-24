import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, Image} from 'react-native';
import rows from './Rows'

class Details extends Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');
    item = rows.find( function(element) {return (itemId == element.id)} )
    return (
      <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: item.image}}
            />
            <Text> {item.moretext}</Text>
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
  image: {
    width: 50,
    height: 50,
  },

  })

export default Details;

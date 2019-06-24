import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, Image , TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import rows from './Rows';

const extractKey = ({id}) => id

export default class List extends Component {
  
    onPressItem = (id) => {
        this.props.navigation.navigate('Details', {itemId: id})
    } 

    renderItem = ({item}) => {
 
        return (
      <TouchableOpacity onPress={() => this.onPressItem(item.id)}>
            <Text style={styles.row}>
                {item.text}
            </Text>
           
    </TouchableOpacity>

)
  }
  
  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}




const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  image: {
    width: 20,
    height: 20,
  },
})
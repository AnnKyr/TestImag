import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ListWindow from './ListWindow'
import DetailsWindow from './DetailsWindow'

//export default 
class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('ListWindow')}
          />
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    ListWindow: ListWindow,
    DetailsWindow: DetailsWindow,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
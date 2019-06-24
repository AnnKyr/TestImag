import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import List from './List'
import Details from './Details'

//export default 
class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('List')}
          />
      </View>
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: List,
    Details: Details,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
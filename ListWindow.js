import React, { Component } from 'react'
import { Provider } from 'react-redux'
import List from './List'
import store from './Store'

export default class ListWindow extends Component {
  render = () => (
      <Provider store={store}>
        <List navigation = {this.props.navigation}/>
      </Provider>
    );
  
}
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Details from './Details'
import store from './Store'

export default class DetailsWindow extends Component {
  render = () => (
      <Provider store={store}>
        <Details navigation = {this.props.navigation}/>
      </Provider>
    );
  
}
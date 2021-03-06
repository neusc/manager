import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import Router from './Router'

class App extends Component {
  componentWillMount () {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyAb587jWFHGKwRs5kmQeP-8GyYZmEE8nKg',
      authDomain: 'manager-dd368.firebaseapp.com',
      databaseURL: 'https://manager-dd368.firebaseio.com',
      projectId: 'manager-dd368',
      storageBucket: 'manager-dd368.appspot.com',
      messagingSenderId: '1089868311224'
    }
    firebase.initializeApp(config)
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App

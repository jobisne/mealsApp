import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator'
import mealsReducer from './store/reducer/meals';
import {createStore, combineReducers} from 'redux';

import { Provider} from 'react-redux';

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);


export default function App() {
  return(
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
    
  )
}




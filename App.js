import {StatusBar} from 'react-native';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import React  from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
{
    return (
      <Provider store={ store}>
      <TodoHeader/>
      </Provider>
   );
  };
  };


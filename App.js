/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { createContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
 
  useColorScheme,
  View,
} from 'react-native';
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';
import AppNavigation from './src/navigation/AppNavigation';
import Login from './src/screens/login/Login';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Container = styled.View`
flex:1;
background-color: white;  
justify-content: center;
`;
export const GlobalContext = createContext({});

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <GlobalContext.Provider value={{user:'rushi',isLoggedIn,setisLoggedIn}}>
    <Container>    
    <AppNavigation></AppNavigation>
    </Container>
    </GlobalContext.Provider>
   
  );
};


export default App;

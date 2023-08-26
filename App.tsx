import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/Navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';


function App(){
  
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Routes/>
    </NavigationContainer>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;

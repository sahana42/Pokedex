import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Bulbasaur from '../screens/Bulbasaur';
import Aron from '../screens/Aron';
import Charmander from '../screens/Charmander';
import Squirtle from '../screens/Squirtle';
import Butterfree from '../screens/Butterfree';
import Pikachu from '../screens/Pikachu';
import Gastly from '../screens/Gastly';
import Ditto from '../screens/Ditto';
import Mew from '../screens/Mew';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Bulbasaur" component={Bulbasaur} options={{ headerShown: false }}/>
      <Stack.Screen name="Charmander" component={Charmander} options={{ headerShown: false }}/>
      <Stack.Screen name="Squirtle" component={Squirtle} options={{ headerShown: false }}/>
      <Stack.Screen name="Butterfree" component={Butterfree} options={{ headerShown: false }}/>
      <Stack.Screen name="Pikachu" component={Pikachu} options={{ headerShown: false }}/>
      <Stack.Screen name="Gastly" component={Gastly} options={{ headerShown: false }}/>
      <Stack.Screen name="Ditto" component={Ditto} options={{ headerShown: false }}/>
      <Stack.Screen name="Mew" component={Mew} options={{ headerShown: false }}/>
      <Stack.Screen name="Aron" component={Aron} options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
};

export default Routes;

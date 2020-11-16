/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from'@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import Home from './src/pages/Home';
import Register from './src/pages/Register';

const Stack = createStackNavigator();

export default function App(){
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" 
          component={Home}
          options={{
            title: 'Seja Bem vindo(a)',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            }            
          }}
          />
          <Stack.Screen 
          name="Register" 
          component={Register}
          options={{
            title: 'Cadastrar',
            headerTitleStyle: {
              fontWeight: 'bold',
                                          
            }            
          }}
          />
      </Stack.Navigator>
      
      </NavigationContainer>
  );
 
}
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Character from '../screens/Character/Character';

// ** using stack navigator only, we can have tab navigation, drawer navigation as well
const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: true,
        gestureEnabled: true,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false, // don't need a header on the home screen
        }}
      />
      <Stack.Screen
        name="CharacterScreen"
        component={Character}
        options={{
          title: 'Character Profile', // header title changed explicitly
        }}
      />
    </Stack.Navigator>
  );
}

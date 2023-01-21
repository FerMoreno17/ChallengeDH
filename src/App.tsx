import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Detalle from './screens/Detalle';

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  Detalle: undefined;
};

declare global {
  namespace ReactNavigation {
    type RootParamLists = RootStackParamList;
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

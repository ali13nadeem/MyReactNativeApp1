import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FinancialInfoScreen from './screens/FinancialInfoScreen'; // Ensure this path is correct
import Carousel from './screens/Carousel';
import Index from './screens/Index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FinancialInfoScreen" component={FinancialInfoScreen} />
        <Stack.Screen name="Carousel" component={Carousel} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

























import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FinancialInfoScreen from './screens/FinancialInfoScreen'; // Ensure this path is correct
// import Financialinfo from './screens/Financialinfo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FinancialInfoScreen" component={FinancialInfoScreen} />
{/*         <Stack.Screen name="Financialinfo" component={FinancialInfoScreen} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

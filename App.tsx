import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PageContainer from './screens/PageContainer'; // Adjust the path if needed
import FinancialInfoScreen from './screens/FinancialInfoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={PageContainer} />
          <Stack.Screen name="FinancialInfoScreen" component={FinancialInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

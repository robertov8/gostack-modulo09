import React from 'react';
import PropTypes from 'prop-types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator tabBarOptions={{ tabStyle: { justifyContent: 'center' } }}>
      <Tab.Screen name="App" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default function Routes({ signedIn }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={signedIn ? 'App' : 'SignIn'}>
        {signedIn ? (
          <Stack.Screen
            name="App"
            component={App}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Routes.propTypes = {
  signedIn: PropTypes.bool,
};

Routes.defaultProps = {
  signedIn: false,
};

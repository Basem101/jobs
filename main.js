import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TabNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';

class App extends React.Component {

  render() {
    // TabNavigator(RouteConfigs, TabNavigatorConfig)
    // RouteConfigs
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen }
      },
      // TabNavigatorConfig
      {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: { activeTintColor: '#e91e63' }      
      }
    );

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);

import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';


class App extends React.Component {

  render() {
    // TabNavigator(RouteConfigs, TabNavigatorConfig)
    // RouteConfigs
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        // nested tab navigators
        main: {
          screen: TabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
            // wire up stack navigator inside tab Navigator
            review: { screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen}
             })
            }
          }, {
            tabBarPosition: 'bottom',
            animationEnabled: true,
            tabBarOptions: { activeTintColor: '#e91e63' }      
          })
        }
      }, {
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

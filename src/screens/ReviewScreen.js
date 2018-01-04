import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
	// static navigationOptions = {
	// 	title: 'Review Jobs',
	// 	headerRight: (
	// 		<Button
	// 			title={'Settings'}
	// 			onPress={() => console.log('header right clicked') }
	// 		/>
	// 	),
	// }


	static navigationOptions = ({ navigation }) => ({
	  title: 'Review Jobs',
	  headerRight: (
  <Button
    title="Settings"
    backgroundColor="rgba(0,0,0,0)"
    color="rgba(0, 122, 255, 1)"
    onPress={
						() => {
							console.log('navigation!!', navigation.navigate);
							navigation.navigate('settings');
						}
					}
  />
	  ),
	})

	render() {
	  return (
  <View>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
    <Text>ReviewScreen</Text>
  </View>
	  );
	}
}

export default ReviewScreen;

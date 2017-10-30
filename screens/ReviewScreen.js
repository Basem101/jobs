import React,  { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

class ReviewScreen extends Component {

	// defining navigtionOptions as an object
	// static navigationOptions = {
	// 	title: 'Review Jobs',
	// 	headerRight:  <Button title='Settings' onPress={ () => {} }/>,
	// 	// headerLeft:  <Text>Left</Text>,
	// 	// tintColor: 'Brown'
	// }


	// defining navigationOption as arrow function that return a function object
	// when we register a component with a navigator. that component will then have a 'navigation' object as a prop
	static navigationOptions = ({ navigation }) => ({
		title: 'Review Jobs',
		headerRight:  <Button title='Settings' onPress={ () => navigation.navigate('settings') }/>,
	});

	render() {
		return (
			<View>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
			</View>
		);
	}
}

export default ReviewScreen;
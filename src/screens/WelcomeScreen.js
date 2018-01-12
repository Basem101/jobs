import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import Slides from '../components/slides';
import * as actions from '../actions/auth_actions';

const SLIDE_DATA = [
	{ text: 'Welcome to JobApp', color: '#03A9F4' },
	{ text: 'Use this to get a job', color: '#009688' },
	{ text: 'Set your location, then swipe away', color: '#03A9F4' },
];

class WelcomeScreen extends Component {
	state = {
		token: null,
	}

	async componentWillMount() {
		const token = await AsyncStorage.getItem('fb_token');
		if (token) {
			this.props.navigation.navigate('map');
			this.setState({ token });
		} else {
			this.setState({
				token: false,
			});
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('auth');
	}

	render() {
		if (this.state.token === null) {
			return <AppLoading />;
		}
		return (
			<Slides
				data={SLIDE_DATA}
				onComplete={this.onSlidesComplete}
  />
		);
	}
}

export default connect(null, actions)(WelcomeScreen);

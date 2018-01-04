import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Slides from '../components/slides';
import { connect } from 'react-redux';
import * as actions from '../actions/auth_actions';
import { AppLoading } from 'expo';
import _ from 'lodash';


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
	  console.log('token? ', token);
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
	    console.log('this.state.token is null');
	    return <AppLoading />;
	  }

	  return (
  <Slides
    data={SLIDE_DATA}
    onComplete={this.onSlidesComplete}
  />
	  );
	  // return <AppLoading />
	}
}

export default connect(null, actions)(WelcomeScreen);

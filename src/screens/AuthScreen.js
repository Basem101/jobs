import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import * as actions from '../actions/auth_actions';
import { connect } from 'react-redux';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

	onAuthComplete = (props) => {
	  console.log('this.props: ', this.props);
	  if (props.token !== 'undefined' || props.token !== null) {
	    this.props.navigation.navigate('map');
	  }
	}

	render() {
	  return (
  <View>
    <Text>AuthScreen</Text>
    <Text>AuthScreen</Text>
    <Text>AuthScreen</Text>
    <Text>AuthScreen</Text>
    <Text>AuthScreen</Text>
    <Text>AuthScreen</Text>
    <Text>AuthScreen</Text>
  </View>
	  );
	}
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);

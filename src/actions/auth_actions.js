import { AsyncStorage } from 'react-native';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
} from './types';
import { Facebook } from 'expo';


export const facebookLogin = () => async (dispatch) => {
  console.log('facebookLogin in auth_actions');

  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

doFacebookLogin = async (dispatch) => {
  const { type, token, param } = await Facebook.logInWithReadPermissionsAsync('1986309468249875', {
    permissions: ['public_profile', 'email', 'user_friends'],
  });
  if (type === 'cancel') {
    dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  await AsyncStorage.setItem('fb_token', token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  console.log('type: ', type);
  console.log('token: ', token);
  console.log('param: ', param);
};


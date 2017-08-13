import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator }  from 'react-navigation';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './../Index';
import Login from './../components/Login';

 const Router = StackNavigator({
  Landing: {
  	screen: Index,
  	navigationOptions: {
  		header: null,
  	}
  },
  Login: {
  	screen: Login,
  	navigationOptions: {
  		title: 'Login',
  		headerLeft: null,
  	}
  },
},
{
  initialRouteName: 'Landing',
});

export default Router;

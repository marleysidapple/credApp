import React, { Component, StyleSheet } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator }  from 'react-navigation';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './../Index';
import Login from './../components/Login';
import Register from './../components/Register';

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

   Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    }
  },
},
{
  initialRouteName: 'Landing',
});




export default Router;

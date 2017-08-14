import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator }  from 'react-navigation';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './../Index';
import Login from './../components/Login';
import Register from './../components/Register';
import DashboardTabsCollection from './Tabs';



 export const Router = StackNavigator({
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

      Dashboard: {
        screen: DashboardTabsCollection
      },
  },
{
  initialRouteName: 'Dashboard',
});


const AppWithNavigationState = ({dispatch, nav}) => (
    <Router
      navigation={addNavigationHelpers({
        dispatch,
        state: nav
      })}
      />
);



const mapStateToProps = (state) => {
  return{
    nav: state.nav
  }
}

export default connect(mapStateToProps)(AppWithNavigationState);


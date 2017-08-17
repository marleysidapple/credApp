import React, { Component, StyleSheet } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loans from './../components/dashboard/Loans';
import Profile from './../components/dashboard/Profile';

//loan builder steps
import Loanroutes from './Loanroutes';


const DashboardTabsCollection = TabNavigator({
  Loans: {
    screen: Loanroutes,
    navigationOptions: {
      header: null,
    	tabBarIcon: ({ tintColor }) => <Icon name="textsms" size={25} color={tintColor} />,
    }
  },
  Repayments: {
    screen: Loans,
    navigationOptions: {
    	title: 'Repayments',
    	tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={25} color={tintColor} />,
    	headerLeft: null
    }
  },

  Notification: {
    screen: Loans,
    navigationOptions: {
    	title: 'Notification',
    	tabBarIcon: ({ tintColor }) => <Icon name="contacts" size={25} color={tintColor} />,
    	headerLeft: null,
     // headerRight: <Button title="Add"></Button>,
    }
  },

  Profile: {
    screen: Profile,
    navigationOptions: {
    	title: 'Profile',
    	tabBarIcon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />,
    	headerLeft: null
    }
  },
},
{
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'open-sans'
    }
  }
}
);




export default DashboardTabsCollection;
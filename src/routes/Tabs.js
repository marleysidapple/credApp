import React, { Component } from 'react';
import { Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loans from './../components/dashboard/Loans';

const DashboardTabsCollection = TabNavigator({
  Loans: {
    screen: Loans,
    navigationOptions: {
    	headerLeft: null,
    	title: 'Loans',
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
      headerRight: <Button title="Add"></Button>,
    }
  },

  Profile: {
    screen: Loans,
    navigationOptions: {
    	title: 'Profile',
    	tabBarIcon: ({ tintColor }) => <Icon name="settings" size={25} color={tintColor} />,
    	headerLeft: null
    }
  },
});


export default DashboardTabsCollection;
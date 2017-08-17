import React, { Component, StyleSheet } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loans from './../components/dashboard/Loans';
import Loanstepone from './../components/loans/Loanstepone';


const Loanroutes = StackNavigator({
    Loans: {
       screen: Loans,
      },

      NewloanStepOne: {
        screen: Loanstepone,
        navigationOptions: {
        	title: 'Hey there'
        }
      }
});


export default Loanroutes;

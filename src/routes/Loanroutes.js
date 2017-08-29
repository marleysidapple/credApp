import React, { Component, StyleSheet } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Loans from './../components/dashboard/Loans';

import Loandetail from './../components/dashboard/Loandetail';

//steps for building loan
import Loanstepone from './../components/loans/Loanstepone';


const Loanroutes = StackNavigator({
    LoanList: {
       screen: Loans,
      },


    LoanDetail: {
    	screen: Loandetail,
    },

  

      NewloanStepOne: {
        screen: Loanstepone,
        navigationOptions: {
        	title: 'Hey there'
        }
      }
},
{
  initialRouteName: 'LoanList'
});


export default Loanroutes;

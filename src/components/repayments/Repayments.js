import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
import { Icon, ButtonGroup } from 'react-native-elements';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';

class Repayment extends Component {

  static navigationOptions = ({ navigation }) => ({
        title: <Text style={styles.textHeader}>REPAYMENTS</Text>,
        headerStyle : {
          backgroundColor: "#25ADE4",
          height: 90,
        },
      navigationOptions: {
            tabBarVisible: false,
          },

        headerLeft: null,
        headerRight: null
  });


 render(){
   const buttons = ['Payments In', 'Payments Out'];
   return(
      <View>
        <ButtonGroup buttons={buttons} textStyle={{fontFamily: 'open-sans', fontSize: 11}} />
        <Text>Repayment List</Text>
      </View>
   );
 }

}


const styles = StyleSheet.create({
  textHeader: {
		fontFamily: 'open-sans',
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 4
	},

});



export default Repayment;

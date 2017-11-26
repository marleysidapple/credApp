import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
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
      <ScrollView style={styles.repaymentWrapper}>
        <ButtonGroup buttons={buttons} textStyle={{fontFamily: 'open-sans', fontSize: 11}} />


        <View style={styles.repaymentCell}>
            <View style={styles.repaymentContent}>
              <View style={styles.imageWrapper}>
                <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
              </View>

              <View style={styles.loanDescription}>
                  <View style={styles.description}>
                    <Text style={styles.loanTitle}>Trip To Las Vegas</Text>
                    <Text style={styles.loanContractNo}>Date Due: 2017-02-19</Text>
                  </View>
              </View>

              <View style={styles.repaymentAmount}>
                      <Text style={styles.amount}>$600</Text>
              </View>
            </View>

            <View style={styles.additionalInfo}>
                <Text>asdas</Text>
            </View>
        </View>

        <View style={styles.repaymentCell}>
            <View style={styles.repaymentContent}>
              <View style={styles.imageWrapper}>
                <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
              </View>

              <View style={styles.loanDescription}>
                  <View style={styles.description}>
                    <Text style={styles.loanTitle}>Trip To Las Vegas</Text>
                    <Text style={styles.loanContractNo}>Date Due: 2017-02-19</Text>
                  </View>
              </View>

              <View style={styles.repaymentAmount}>
                      <Text style={styles.amount}>$600</Text>
              </View>
            </View>
        </View>

        <View style={styles.repaymentCell}>
          <View style={styles.imageWrapper}>
            <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
          </View>
        </View>

        <View style={styles.repaymentCell}>
          <View style={styles.imageWrapper}>
            <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
          </View>
        </View>

        <View style={styles.repaymentCell}>
          <View style={styles.imageWrapper}>
            <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
          </View>
        </View>

        <View style={styles.repaymentCell}>
          <View style={styles.imageWrapper}>
            <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
          </View>
        </View>
      </ScrollView>
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

  repaymentWrapper: {
    flex: 1,
    backgroundColor: "white"
  },

  repaymentCell: {
    padding: 20,
    marginLeft: 11,
    marginRight: 11,
    height: 110,
    backgroundColor: "#EBEDF0",
    flex: 1,
    borderWidth: 0,
    marginTop: 5,
    justifyContent: "center"
  },

  repaymentContent: {
    flex: 1,
    flexDirection: 'row'
  },

  imageWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },

  repaymentIcon: {
    width: 40,
    height: 40
  },

  loanDescription: {
      flex: 1,
      justifyContent: 'center'
  },

  loanTitle: {
    fontFamily: 'open-sans',
    padding: 5,
    marginLeft: 5,
    color: "#576068"
  },

  loanContractNo: {
      fontFamily: 'open-sans',
      marginLeft: 10,
      fontSize: 10,
      color: "#576068"
  },

  repaymentAmount: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  amount: {
    fontFamily: 'open-sans'
  },


  additionalInfo: {
    flexDirection: 'row',
    backgroundColor: 'blue',
  }

});



export default Repayment;

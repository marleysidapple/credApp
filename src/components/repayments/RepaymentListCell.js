import React, {Component} from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage, ActionSheetIOS } from 'react-native';
import { Icon, ButtonGroup, Badge } from 'react-native-elements';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';


class RepaymentListCell extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

  }

  showActionSheet(){
    ActionSheetIOS.showActionSheetWithOptions({
     options: ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'],
     cancelButtonIndex: 3,
     destructiveButtonIndex: 4,
   },
   (buttonIndex) => {
     this.setState({ clicked: 2 });
   });
  }


  render(){
    const {repayment}  = this.props;
    return(
      <TouchableOpacity style={styles.repaymentCell} key={repayment.guid} onPress={() => this.showActionSheet()}>
          <View style={styles.repaymentContent}>
            <View style={styles.imageWrapper}>
              <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
            </View>


            <View style={styles.loanDescription}>
                  <View style={styles.description}>
                      <Text style={styles.loanTitle} numberOfLines={1}>{repayment.loan_alias}</Text>
                          <Badge containerStyle={{ backgroundColor: '#FAFAFB', height: 20, justifyContent: 'center', alignItems: 'center'}} textStyle={styles.loanStatus}>
                            <Text style={styles.loanStatus}>{repayment.status_name}</Text>
                          </Badge>
                  </View>
                  <Text style={styles.loanContractNo}>Date Due: 2017-02-05</Text>
            </View>

            <View style={styles.repaymentAmount}>
                    <Text style={styles.amount}>{repayment.currency_code} {repayment.currency_symbol}{repayment.repayment_amount}</Text>
            </View>
          </View>

          <View style={styles.additionalInfo}>
              <Text style={styles.person}>
              {(repayment.payments_in) ?
                <Text>From: {repayment.borrower_name}</Text>
                :<Text>To: {repayment.lender_name}</Text>
              }
              </Text>
              <Text style={styles.number}>{repayment.loan_number}</Text>
          </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  repaymentWrapper: {
    flex: 1,
    backgroundColor: "white"
  },

  repaymentCell: {
    marginLeft: 11,
    marginRight: 11,
    height: 110,
    backgroundColor: "#EBEDF0",
    flex: 1,
    borderWidth: 0,
    marginTop: 5,
    justifyContent: "center",
  },

  repaymentContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
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
      flex: 3,
  },

  loanTitle: {
    fontFamily: 'open-sans',
    padding: 5,
    marginLeft: 5,
    flex:1,
    color: "#576068",
  },

  loanContractNo: {
      fontFamily: 'open-sans',
      marginLeft: 10,
      fontSize: 10,
      color: "#576068"
  },

  repaymentAmount: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  amount: {
    fontFamily: 'open-sans-bold',
    color: "#576068",
    fontSize: 12,
    color: '#25ADE4'
  },

  description: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },

  loanStatus: {
    fontFamily: 'open-sans',
    flex: 2,
    color: '#25ADE4',
    justifyContent: 'center',
    fontSize: 11,

  },


  additionalInfo: {
    flexDirection: 'row',
    flex: 1,
    borderTopWidth: 0.5,
    alignItems: 'center',
    paddingLeft: 15,
    borderTopColor: "#d1d5da",
  },

  person: {
    fontFamily: 'open-sans',
    flex: 2,
    color: "#576068",
  },

  number: {
    fontFamily: 'open-sans',
    flex: 1,
    color: "#576068",
  }

});

export default RepaymentListCell;

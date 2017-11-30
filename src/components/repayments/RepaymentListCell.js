import React, {Component} from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
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

  render(){
    const {repayment}  = this.props;
    return(
      <TouchableOpacity style={styles.repaymentCell} key={repayment.guid}>
          <View style={styles.repaymentContent}>
            <View style={styles.imageWrapper}>
              <Image source={require('./../../../assets/images/repayment.png')} style={styles.repaymentIcon}  resizeMode={'contain'} />
            </View>

            <View style={styles.loanDescription}>
                <View style={styles.description}>
                  <Text style={styles.loanTitle}>Trip To Las Vegas asdas</Text>
                  <Text style={styles.loanContractNo}>Date Due: 2017-02-19</Text>
                </View>
            </View>

            <View style={styles.repaymentAmount}>
                    <Text style={styles.amount}>$600</Text>
            </View>
          </View>

          <View style={styles.additionalInfo}>
              <Text style={styles.person}>From: Sid</Text>
              <Text style={styles.number}>C120394543</Text>
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
      justifyContent: 'center'
  },

  loanTitle: {
    fontFamily: 'open-sans',
    padding: 5,
    marginLeft: 5,
    color: "#576068",
  },

  loanContractNo: {
      fontFamily: 'open-sans',
      marginLeft: 10,
      fontSize: 10,
      color: "#576068"
  },

  repaymentAmount: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  amount: {
    fontFamily: 'open-sans'
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
    //backgroundColor: 'yellow',
  },

  number: {
    fontFamily: 'open-sans',
    flex: 1,
    color: "#576068",
    //backgroundColor: 'blue',
  }

});

export default RepaymentListCell;

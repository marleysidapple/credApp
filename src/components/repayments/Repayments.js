import React, { Component } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
import { Icon, ButtonGroup, Badge } from 'react-native-elements';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { fetchAllRepayments } from './../../actions/Repayment';
import { connect } from 'react-redux';
import RepaymentListCell from './RepaymentListCell';

class Repayment extends Component {

  constructor(props) {
    super(props);
  }

  async componentWillMount(){
		this.props.fetchAllRepayments(this.props.token, this.props.clientGuid);
		this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps);
	}

	createDataSource(props){
		 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		 this.dataSource = ds.cloneWithRows(props.repaymentList);
	}

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
        {(!this.props.repaymentLoadingStatus) ?
        <ListView enableEmptySections  initialListSize={10} dataSource={this.dataSource} renderRow={(data, sectionID, rowID) => <RepaymentListCell row={rowID} repayment={data} navigation={this.props.navigation} loading={this.props.repaymentLoadingStatus} />} />
       : <Text>Loading.....</Text>}
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

function mapStateToProps(state){
  console.log(state.user_repayment);
  return {
    token: state.auth_login.detail.loginToken,
    clientGuid: state.auth_login.detail.clientGuid,
    repaymentLoadingStatus: state.user_repayment.loading,
    repaymentList: state.user_repayment.repayments,
  }
}



export default connect(mapStateToProps, { fetchAllRepayments })(Repayment);

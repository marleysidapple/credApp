import React, { Component } from 'react';
import { Text, View, ScrollView, Image, ListView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Icon, ButtonGroup, Badge } from 'react-native-elements';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { fetchAllRepayments } from './../../actions/Repayment';
import { connect } from 'react-redux';
import RepaymentListCell from './RepaymentListCell';

class Repayment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  async componentWillMount(){
		this.props.fetchAllRepayments(this.props.token, this.props.clientGuid, this.state.index);
		this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps);
	}

	createDataSource(props){
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.dataSource = ds.cloneWithRows(props.repaymentList);
	}

  updateIndex = (index) => {
    this.setState({index});
    this.props.fetchAllRepayments(this.props.token, this.props.clientGuid, this.state.index);
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
   const buttons = ['All', 'Payments In', 'Payments Out'];
   return(
      <ScrollView style={styles.repaymentWrapper}>
        <ButtonGroup  selectedBackgroundColor="#25ADE4"
                      onPress={this.updateIndex}
                      selectedIndex={this.state.index}
                      buttons={buttons}
                      textStyle={{fontFamily: 'open-sans', fontSize: 11}} />
        {(!this.props.repaymentLoadingStatus) ?
        <ListView enableEmptySections  initialListSize={10} dataSource={this.dataSource} renderRow={(data, sectionID, rowID) => <RepaymentListCell row={rowID} repayment={data} navigation={this.props.navigation} loading={this.props.repaymentLoadingStatus} />} />
        : <ActivityIndicator size={'small'} />}

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

});


function mapStateToProps(state){
  console.log(state.user_repayment.repayments);
  return {
    token: state.auth_login.detail.loginToken,
    clientGuid: state.auth_login.detail.clientGuid,
    repaymentLoadingStatus: state.user_repayment.loading,
    repaymentList: state.user_repayment.repayments,
  }
}



export default connect(mapStateToProps, { fetchAllRepayments })(Repayment);

import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';
import { validateLoginCredential } from './../../actions/Authentication';
import { fetchAvailableLoans } from './../../actions/Myloan';
import { SearchBar, Icon, ButtonGroup } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';




class Loans extends Component {
	constructor(props){
		super(props);
	}

	
	componentWillMount(){
		this.props.fetchAvailableLoans(this.props.token);
		// try {
		// 	  const token = await AsyncStorage.getItem('@auth:loginToken');
		// 	  if (token !== null){
		// 	    // We have data!!
		// 	  //  console.log(token);
		// 	  	this.props.fetchAvailableLoans(this.props.);
		// 	  }
		// 	} catch (error) {
		// 		console.log('no token');
		// 	  // Error retrieving data
		// 	}
	}
	
	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>MY LOANS</Text>,
		    headerStyle : {
		    	backgroundColor: "#FF9F1C",
		    	height: 90,
		    },
		  
		  	headerLeft: null,
		  	headerRight: null
	});

	 gotoSpecificLoan(loanGuid){
		   		const navigateAction = NavigationActions.reset({
		   			//stateName: 'MainAppNav',
		    		routeName: 'Loans',
		    		index: 0,
					actions:  [NavigationActions.navigate({ routeName: 'LoanDetail' })]
				})
				this.props.navigation.dispatch(navigateAction)
	 }



	
	listOfLoans(){
		return <View>
					<SearchBar round containerStyle={styles.searchContainerStyle} inputStyle={styles.inputContainerStyle} placeholder='Search Loans..' />
						<ScrollView>
							{
							!this.props.loading ?

								this.props.loanList.map((loan) => {
									return	<TouchableOpacity style={styles.cardWrapper}  key={loan.guid} onPress={() => this.gotoSpecificLoan(loan.guid)} >
											<View style={styles.leftDetailWrapper}>
												<Text style={styles.loanTitle}>{loan.alias}</Text>
												<Text style={styles.loanTitle}>Date: <Moment element={Text} format="YYYY-MM-DD">{loan.created}</Moment></Text>
												<Text style={styles.loanTitle}>Status: {loan.status_short}</Text>
											</View>

											<View style={styles.amountWrapper}>
												<Text style={styles.loanTitle}>Amount: {loan.amount}</Text>
												<Text style={styles.loanTitle}>Repay fee: {loan.repaymentAmount ? loan.repaymentAmount : '' }</Text>
												
											</View>
										</TouchableOpacity>
									}) : 
								    <ActivityIndicator size={'small'}/>

							}
						</ScrollView></View>
	}

	
	render(){
		const buttons = ['Borrowed', 'Lent', 'Pending', 'Draft', 'Live'];
		return(
			<View>
			<ButtonGroup
		      	buttons={buttons}
		     	 containerStyle={this.buttonGroupStyle}
		     	 textStyle={{fontFamily: 'open-sans', fontSize: 10}} />
				{this.listOfLoans()}
			</View>
		);
	}
	


}


const styles = StyleSheet.create({
	cardWrapper: {
	    flex: 1,
	    flexDirection: 'row',
		borderWidth: 1,
		borderLeftWidth: 8,
		borderLeftColor: '#3EA7D9',
		borderColor: '#d6d4d4',
		height: 100,
		padding: 20,
		margin: 8,
		borderRadius: 2
	},

	leftDetailWrapper: {
		flex: 4,
	},

	amountWrapper: {
		flex: 2,
		//flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center'
	},

	loanTitle: {
		fontFamily: FONT_NORMAL,
		color: LOAN_FONT_COLOR,
		fontSize: FONT_SIZE,
		paddingTop: 3
	},

	searchContainerStyle: {
		backgroundColor: 'transparent',
		borderTopWidth: 0,
		borderBottomWidth: 0,
	},

	buttonGroupStyle: {
		height: 50
	},

	inputContainerStyle: {
		backgroundColor: '#fff',
		borderColor: '#d6d4d4',
		borderWidth: 1,
		fontSize: 12,
		fontFamily: FONT_NORMAL,
	},

	textHeader: {
		fontFamily: 'open-sans-bold', 
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 4
	}

});

function mapStateToProps(state){
	return{
		token: state.auth_login.detail.loginToken,
		loading: state.user_loan.loading,
		loanList: state.user_loan.loans,
	}
}



export default connect(mapStateToProps, { fetchAvailableLoans })(Loans);
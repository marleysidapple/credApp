import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import Moment from 'react-moment';
import { NavigationActions } from 'react-navigation';

class Loanlist extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		console.log(this.props.navigation);
	}


	gotoSpecificLoan(loanGuid){
				const navigateAction = NavigationActions.reset({
					stateName: 'MainAppNav',
					index: 0,
					params: { loanGuid },
					actions: [NavigationActions.navigate({routeName: 'LoanDetail'})]
				});
				this.props.navigation.dispatch(navigateAction);				
	 }


	render(){
		const {loan}  = this.props;
		return(
				<TouchableOpacity style={styles.cardWrapper}  key={loan.guid} onPress={() => this.gotoSpecificLoan(loan.guid)} >
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
		);
	}

} 

const styles=StyleSheet.create({
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

});

export default Loanlist;
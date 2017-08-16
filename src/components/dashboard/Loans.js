import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';
import { validateLoginCredential } from './../../actions/Authentication';

class Loans extends Component {
	constructor(props){
		super(props);
	}


	static navigationOptions = ({ navigation, styles }) => {
		return {
		    title: <Text style={{fontFamily: 'open-sans'}}>Loans</Text>,
		};
	};

	listOfLoans(){
		
	}

	renderEitherLoadingSpinnerOrLoanList(){
		
	}


	render(){
		return(
			<ScrollView>
			{
				this.props.loanList.map((loan) => {

					return	<TouchableOpacity style={styles.cardWrapper}  key={loan.guid}>
							<View style={styles.leftDetailWrapper}>
								<Text style={styles.loanTitle}>Loan taken to buy a new car</Text>
								<Text style={styles.loanTitle}>Type: {'Lend'}</Text>
								<Text style={styles.loanTitle}>Date: {'2017-02-12'}</Text>
								<Text style={styles.loanTitle}>Status: Open</Text>
							</View>

							<View style={styles.amountWrapper}>
								<Text style={styles.loanTitle}>Amount: $2000</Text>
								<Text style={styles.loanTitle}>Balance: $850.56</Text>
							</View>
						</TouchableOpacity>
					})
			}
			</ScrollView>
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
		height: 120,
		padding: 20,
		margin: 8,
		borderRadius: 2
	},

	leftDetailWrapper: {
		flex: 4,
	},

	amountWrapper: {
		flex: 2,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},

	loanTitle: {
		fontFamily: FONT_NORMAL,
		color: LOAN_FONT_COLOR,
		fontSize: FONT_SIZE
	}


});

function mapStateToProps(state){
	return{
		loanList: state.user_loan.loans
	}
}



export default connect(mapStateToProps, { validateLoginCredential })(Loans);
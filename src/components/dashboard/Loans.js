import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FONT_NORMAL, LOAN_FONT_COLOR } from './../../../assets/css/common';

class Loans extends Component {
	constructor(props){
		super(props);
	}

	static navigationOptions = ({ navigation, styles }) => {
		return {
		    title: <Text style={{fontFamily: 'open-sans'}}>Loans</Text>,
		};
	};

	render(){
		return(
			<View>
				<View style={styles.cardWrapper}>
					<Text style={styles.loanTitle}>Loan taken to buy a new car</Text>
					<Text style={styles.loanTitle}>Type: {'Lend'}</Text>
				</View>

				<View style={styles.cardWrapper}>
					<Text style={styles.loanTitle}>Loan taken to buy a new car</Text>
					<Text style={styles.loanTitle}>Type: {'Lend'}</Text>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	cardWrapper: {
		borderWidth: 1,
		borderColor: '#dbdbdb',
		height: 120,
		padding: 20,
		margin: 10,
		borderRadius: 4
	},

	loanTitle: {
		fontFamily: FONT_NORMAL,
		color: LOAN_FONT_COLOR
	}
});



export default Loans;
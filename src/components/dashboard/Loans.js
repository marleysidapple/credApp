import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';
import { validateLoginCredential } from './../../actions/Authentication';
import { SearchBar, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'



class Loans extends Component {
	constructor(props){
		super(props);
	}
	
	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={{fontFamily: 'open-sans'}}>Loans</Text>,
		    headerRight: <TouchableOpacity onPress={() => {
		    	const navigateAction = NavigationActions.reset({
		    		index: 0,
			    	routeName: 'Dashboard',
					params: {},
					actions: [NavigationActions.navigate({ routeName: 'NewloanStepOne' })],
				})
				  navigation.dispatch(navigateAction)
		    }}>
		    				<Icon containerStyle={{marginRight: 5, marginTop: 5}} name='playlist-plus' type='material-community' color='#636A73' />
		    			</TouchableOpacity>,
		   // headerLeft: <TouchableOpacity onPress={() => console.log('as')}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='filter' type='material-community' color='#636A73' size={19}/></TouchableOpacity>

	});



	listOfLoans(){

	}

	renderEitherLoadingSpinnerOrLoanList(){

	}


	render(){

		return(
			<View>
				<SearchBar round containerStyle={styles.searchContainerStyle} inputStyle={styles.inputContainerStyle} placeholder='Search Loans..' />
					<ScrollView>
					{
						this.props.loanList.map((loan) => {
							
							return	<TouchableOpacity style={styles.cardWrapper}  key={loan.guid}>
									<View style={styles.leftDetailWrapper}>
										<Text style={styles.loanTitle}>Loan taken to buy a new car</Text>
										<Text style={styles.loanTitle}>Date: <Moment element={Text} format="YYYY-MM-DD">{loan.created}</Moment></Text>
										<Text style={styles.loanTitle}>Status: {loan.status_short}</Text>
									</View>

									<View style={styles.amountWrapper}>
										<Text style={styles.loanTitle}>Amount: {loan.amount}</Text>
										<Text style={styles.loanTitle}>Balance: $850.56</Text>
									</View>
								</TouchableOpacity>
							})
					}
					</ScrollView>
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

	inputContainerStyle: {
		backgroundColor: '#fff',
		borderColor: '#d6d4d4',
		borderWidth: 1,
		fontSize: 12,
		fontFamily: FONT_NORMAL,
	}


});

function mapStateToProps(state){
	return{
		loanList: state.user_loan.loans
	}
}



export default connect(mapStateToProps, { validateLoginCredential })(Loans);
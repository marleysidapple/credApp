import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, ListView } from 'react-native';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';
import { validateLoginCredential } from './../../actions/Authentication';
import { SearchBar, Icon, ButtonGroup } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';




class Loans extends Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows(this.props.loanList),
	    };
	}

	componentWillMount(){
		this.props.loanList;
	}
	
	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>Loans</Text>,
		    headerStyle : {
		    	backgroundColor: "#3EA7D9",
		    },
		    headerRight: <TouchableOpacity onPress={() => {
		  //   	const navigateAction = NavigationActions.reset({
		  //   		index: 0,
				// 	actions:  [NavigationActions.navigate({ routeName: 'NewloanStepOne' })]
				// })
				// navigation.dispatch(navigateAction)
		    }}>
		    <Icon containerStyle={{marginRight: 5, marginTop: 5}} name='playlist-plus' type='material-community' color='#fff' />
		   </TouchableOpacity>,
		   headerLeft: <TouchableOpacity onPress={() => console.log('as')}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='filter' type='material-community' color='#fff' size={19}/></TouchableOpacity>
	});

	 gotoSpecificLoan(loanGuid){
		   		const navigateAction = NavigationActions.reset({
		   			stateName: 'MainAppNav',
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
									})
							}
						</ScrollView></View>
	}

	/*
	renderEitherLoadingSpinnerOrLoanList(){
		if (this.props.loading){
			return <ActivityIndicator size = {'small'} />
		} else {
			return this.listOfLoans();
		}
	}
	*/


	render(){
		const buttons = ['Borrowed', 'Lent', 'Pending', 'Draft', 'Live'];
		return(
			<View>
			<ButtonGroup
		      	buttons={buttons}
		     	 containerStyle={{height: 30}}
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
		fontWeight: '500'
	}

});

function mapStateToProps(state){
	return{
		loading: state.user_loan.loading,
		loanList: state.user_loan.loans,
	}
}



export default connect(mapStateToProps, { validateLoginCredential })(Loans);
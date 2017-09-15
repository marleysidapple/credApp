import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';


class LoanbuilderStepTwo extends Component {

	constructor(props){
		super(props);
	}

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>DETAILS</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	//height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepOne'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){
		return(
			<View style={styles.stepOneWrapper}>
				<Text>Loan builder step two</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	textHeader: {
		fontFamily: 'open-sans-bold', 
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 4
	},

	stepOneWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	borrowAndLend: {
		margin: 0,
		padding: 0,
		width: 100,
		height: 100
	},

	borrower: {
		alignItems: 'center',
		justifyContent: 'center',	
	},

	lender: {
		marginTop: 60,
		alignItems: 'center',
		justifyContent: 'center',	
	},

	loanTypeStyle: {
		fontFamily: 'open-sans', 
		color: '#25ADE4',
		fontSize: 18,
		letterSpacing: 5
	}

});

export default LoanbuilderStepTwo;
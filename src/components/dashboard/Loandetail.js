import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

class Loandetail extends Component {


	componentWillMount(){
		console.log(this.props.navigation);
	}

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>OVERVIEW</Text>,
		    headerStyle : {
		    	backgroundColor: "#FF9F1C",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanList'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){
		return(
			<View style={styles.overviewWrapper}>
				<View style={styles.innerHeader}>
					<Text>LOAN REF: 121290</Text>
					<View style={styles.loanAction}>
						<Text> Ed </Text>
						<Text> Ed </Text>
					</View>
				</View>
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

	overviewWrapper: {
		margin: 10,
		padding: 10,
		flex: 1
	},

	innerHeader: {
		flexDirection: 'row'
	},

	loanAction: {
		flex: 1,
		alignItems: 'flex-end',
	}

});

export default Loandetail;
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

class Loandetail extends Component {


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
			<View>
				<Text>This is loan detail</Text>
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
	}

});

export default Loandetail;
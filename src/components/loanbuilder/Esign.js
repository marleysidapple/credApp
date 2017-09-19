import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,  } from 'react-native';
import { Icon } from 'react-native-elements';
import { CARD_STYLE } from './../../../assets/css/common';
import { NavigationActions } from 'react-navigation';

class Esign extends Component {

	constructor(props){
		super(props);
	}

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>ISSUE REQUEST</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepThree'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});
	
	render(){
		return(
			<View>
				<View style={styles.issueInformation}>
					<Text style={styles.esignInfo}>Please sign on the dotted line to send loan request to Jon Evans</Text>
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

	cardStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
		borderWidth: 0,
		margin: 4,
		borderRadius: 2,
		backgroundColor:'#fff',
		elevation: 5
	},

	issueInformation: {
		marginTop: 15,
		alignContent: 'center',
		padding: 20
	},

	esignInfo: {
		textAlign: 'center',
		fontFamily: 'open-sans',
	}

	

});

export default Esign;
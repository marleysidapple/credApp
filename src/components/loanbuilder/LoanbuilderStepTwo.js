import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Icon,  FormLabel, FormInput } from 'react-native-elements';
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
				<View style={styles.formGroup}>
					<FormLabel fontFamily={'open-sans'}>Title</FormLabel>
					<FormInput containerStyle={styles.inputStyle}/>
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

	stepOneWrapper: {
		flex: 1,
	},

	formGroup: {
		flex: 1,
		flexDirection: 'row'
	},

	inputStyle: {
		borderColor: 'black'
	}


});

export default LoanbuilderStepTwo;
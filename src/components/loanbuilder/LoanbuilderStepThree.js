import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Picker, Dimensions, Animated } from 'react-native';
import { Icon,  FormLabel, FormInput, Divider, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker'



class LoanBuilderStepThree extends Component {

	constructor(props){
		super(props);
	}


	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>REPAYMENTS</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepTwo'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){
		return(
			<ScrollView>

				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Interest Type</FormLabel>
					<Picker style={{height: 50, width: 50, flex: 1, justifyContent: 'center'}} triggerType="onClick">
					  <Picker.Item label="Annual Interest(%)" value="java" />
					  <Picker.Item label="Flat Fee" value="js" />
					</Picker>
				</View>

				

				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Annual Interest(%)</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle}  placeholder={'Give it a friendly title'} returnKeyType={'next'} keyboardType={'numeric'} onSubmitEditing={()=>Keyboard.dismiss()}/>
				</View>
				<Divider style={styles.divider} />

			</ScrollView>
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

	formGroup: {
		margin: 20,
		flexDirection: 'row',

	},



	formLabelStyle: {
		color: '#333333',
		fontSize: 14,
		letterSpacing: 1
	},

	inputContainerStyle: {
		flex: 1,
		borderBottomWidth: 0,
		marginTop: 8,
		borderColor: 'black'
	},

	inputStyle: {
		fontFamily: 'open-sans',
		alignItems: 'flex-start',
		fontSize: 14,
		color: '#333333'
	},

	divider: {
		backgroundColor: '#a8a6a6',
		height: 0.5,
		margin: 12,
	},

});



export default LoanBuilderStepThree;
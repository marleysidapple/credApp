import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Picker, Modal } from 'react-native';
import { Icon,  FormLabel, FormInput, Divider, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import ModalSelector from 'react-native-modal-selector';


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

		const data = [
			{key: 1, section: true, label: 'Interest/Flat fee'},
			{key: 2, label: 'Interest % '},
			{key: 3, label: 'Flat Fee'},
		];

		return(
			<ScrollView>

				<View>
					<ModalSelector
	                    data={data}
	                    initValue="Interest %"
	                    sectionTextStyle={styles.selectStyle}
	                    optionTextStyle={styles.selectStyle}
	                    cancelStyle={{padding: 10}}
	                    supportedOrientations={['portrait']}
	                    onChange={(option)=>{ this.setState({textInputValue:option.label})}} >
						<View style={styles.formGroup}>
							<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Interest Type</FormLabel>
							<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle}  placeholder={'Interest %'} value={'Interest %'} returnKeyType={'next'}  onSubmitEditing={()=>Keyboard.dismiss()}/>
						</View>
					</ModalSelector>
				</View>
				
				<Divider style={styles.divider} />

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

	selectStyle: {
		fontFamily: 'open-sans', 
		letterSpacing: 1
	}

});



export default LoanBuilderStepThree;
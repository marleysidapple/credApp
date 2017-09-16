import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, DatePickerIOS } from 'react-native';
import { Icon,  FormLabel, FormInput, Divider } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import DatePicker from 'react-native-datepicker'

class LoanbuilderStepTwo extends Component {

	constructor(props){
		super(props);
		 this.state = {
            date: new Date(),
        }
	}

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>DETAILS</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanBuilderStepOne'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	onDateChange(){
   		//
  	}

	render(){
		return(
			<View style={styles.stepOneWrapper}>
				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Title</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle} placeholder={'Give it a friendly title'}/>
				</View>
				<Divider style={styles.divider} />

				<View style={styles.formGroup}>
					<FormLabel labelStyle={styles.formLabelStyle} fontFamily={'open-sans'}>Total Loan Amount</FormLabel>
					<FormInput containerStyle={styles.inputContainerStyle}  inputStyle={styles.inputStyle} placeholder={'$200'}/>
				</View>
				<Divider style={styles.divider} />


				<View style={styles.formGroup}>
					  <DatePicker
					        style={{width: 200}}
					        date={this.state.date}
					        mode="date"
					        placeholder="select date"
					        format="YYYY-MM-DD"
					        minDate="2016-05-01"
					        maxDate="2016-06-01"
					        confirmBtnText="Confirm"
					        cancelBtnText="Cancel"
					        customStyles={{
					          dateIcon: {
					            position: 'absolute',
					            left: 0,
					            top: 4,
					            marginLeft: 0
					          },
					          dateInput: {
					            marginLeft: 36
					          }
					        }}
					        onDateChange={(date) => {this.setState({date: date})}}
					      />
				</View>
				<Divider style={styles.divider} />


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


	formGroup: {
		marginTop: 20,
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
		backgroundColor: '#a39f9f',
		height: 0.5,
		margin: 15,
	},

	datePicker: {
		flex: 1,
		height: 40,
		//flex: 1,
	}


});

export default LoanbuilderStepTwo;
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { CARD_STYLE } from './../../../assets/css/common';
import { NavigationActions } from 'react-navigation';
import SignaturePad from 'react-native-signature-pad';


class Esign extends Component {

	constructor(props){
		super(props);
	}

	 _signaturePadError = (error) => {
	    console.error(error);
	  };
 
	  _signaturePadChange = ({base64DataUrl}) => {
	    console.log("Got new signature: " + base64DataUrl);
	  };

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
			<ScrollView contentContainerStyle={styles.cardStyle}>
				<View style={styles.issueInformation}>
					<Text style={styles.esignInfo}>Please sign on the dotted line to send loan request to Jon Evans</Text>
				</View>

				
          				
          				<SignaturePad onError={this._signaturePadError}
                        onChange={this._signaturePadChange}
                        style={{flex: 1, backgroundColor: 'white'}}/>

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

	cardStyle: {
		flex: 1,
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
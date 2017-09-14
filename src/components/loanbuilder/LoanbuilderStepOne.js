import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';


class LoanbuilderStepOne extends Component {

	constructor(props){
		super(props);
	}

	static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>BUILD</Text>,
		    headerStyle : {
		    	backgroundColor: "#25ADE4",
		    	//height: 90,
		    },
			navigationOptions: {
	          tabBarVisible: false,
	        },
		  
		    headerLeft: <TouchableOpacity onPress={() => {navigation.dispatch(NavigationActions.navigate({routeName: 'LoanList'}))}}><Icon containerStyle={{marginLeft: 5, marginTop: 5}} name='arrow-left' type='material-community' color='#fff' size={25}/></TouchableOpacity>,
		  	headerRight: null
	});

	render(){
		return(
			<View style={styles.stepOneWrapper}>
				<Image source={require('./../../../assets/images/builder/borrow.png')} resizeMode={'contain'} style={styles.borrowAndLend}/>
				
				<Text>LEND</Text>
				<Image source={require('./../../../assets/images/builder/lend.png')}  resizeMode={'contain'} style={styles.borrowAndLend}/>

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
		width: 200,
		height: 200
	}

});

export default LoanbuilderStepOne;
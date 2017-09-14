import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';


class Notification extends Component {

	constructor(props){
		super(props);
	}

	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>NOTIFICATIONS</Text>,
		    headerStyle : {
		    	backgroundColor: "#D41857",
		    	height: 70,
		    },
		  	headerLeft: null,
		  	headerRight: null
	});


	render(){
		return(
			<View>
				<Text>This is Notification</Text>
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


export default Notification;
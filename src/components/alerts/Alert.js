import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


class Alert extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.alertWrapper}>
				<Text>This is alert</Text>
			</View>
		);
	}

}


const styles = StyleSheet.create({
	alertWrapper: {
		flex: 1
	}
});


export default Alert;
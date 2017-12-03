import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Notification extends Component {

	constructor(props){
		super(props);
	}


	componentWillMount(){
		console.log('oasd');
	}

	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>NOTIFICATIONS</Text>,
		    headerStyle : {
		    	backgroundColor: "#D41857",
		    	height: 90,
		    },
		  	headerLeft: null,
		  	headerRight: null
	});


	render(){
		return(
			<View style={styles.notificationWrapper}>
					<View style={styles.outerWrapper}>
							<View style={styles.iconWrapper}>
								<Icon name={'bell-o'} type='font-awesome' color='#8f8f91' size={25}/>
							</View>
							<View style={styles.descriptionWrapper}></View>
					</View>
			</View>
		);
	}
}


function mapStateToProps(state){
	return {

	};
}


const styles = StyleSheet.create({
	textHeader: {
		fontFamily: 'open-sans-bold',
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 3
	},

	notificationWrapper:{
	 flex: 1,
	 backgroundColor: '#fff'
  },


	outerWrapper: {
		flexDirection: 'row',
		height: 80,
		borderBottomWidth: 0.5,
		borderColor: '#bdbdbf'
	},

	iconWrapper: {
		flex: 1,
		justifyContent: 'center'
		//backgroundColor: 'blue'
	},

	descriptionWrapper: {
		flex: 4,
		backgroundColor: 'yellow'
	}
});


export default connect(mapStateToProps, { })(Notification);

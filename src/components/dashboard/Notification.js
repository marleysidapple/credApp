import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Notification extends Component {

	constructor(props){
		super(props);
	}


	componentWillMount(){

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
					<TouchableOpacity style={styles.outerWrapper}>
							<View style={styles.iconWrapper}>
								<Image source={require('./../../../assets/images/agreed.png')} resizeMode={'contain'} style={styles.iconStyle} />
							</View>
							<View style={styles.descriptionWrapper}>
								<View style={styles.description}>
										<Text style={styles.alertText}>A loan was accepted by sid credi</Text>
								</View>

								<View style={styles.alertInterval}>
									<Text style={styles.alertTime}>21 hours ago</Text>
								</View>
							</View>
					</TouchableOpacity>

			</View>
		);
	}
}


function mapStateToProps(state){
	return {
		token: state.auth_login.detail.loginToken
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
  },


	outerWrapper: {
		flexDirection: 'row',
		height: 80,
		borderBottomWidth: 0.5,
		borderColor: '#bdbdbf',
		backgroundColor: '#fff'
	},

	iconWrapper: {
		flex: 1,
		justifyContent: 'center'
		//backgroundColor: 'blue'
	},

	iconStyle: {
		height: 70,
		width: 70
	},

	descriptionWrapper: {
		flex: 4,
		//backgroundColor: 'yellow',
		borderLeftWidth: 0.5,
		borderColor: '#bdbdbf'
	},

	description: {
		padding: 15
	},

	alertText: {
		fontFamily: 'open-sans',
		color: "#576068"
	},

	alertInterval: {
		paddingLeft: 15,
		//paddingTop: 2
	},

	alertTime: {
		fontFamily: 'open-sans',
		color: "#576068",
		fontSize: 11
	}
});


export default connect(mapStateToProps, { })(Notification);

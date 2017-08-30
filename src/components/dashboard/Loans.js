import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
import Moment from 'react-moment';
import { FONT_NORMAL, LOAN_FONT_COLOR, FONT_SIZE } from './../../../assets/css/common';
import { connect } from 'react-redux';
import { validateLoginCredential } from './../../actions/Authentication';
import { fetchAvailableLoans } from './../../actions/Myloan';
import Loanlist from './../loans/Loanlist';
import { SearchBar, Icon, ButtonGroup } from 'react-native-elements';




class Loans extends Component {
	constructor(props){
		super(props);
	}

	
	async componentWillMount(){
		this.props.fetchAvailableLoans(this.props.token);
		this.createDataSource(this.props);
		try {
			  const token = await AsyncStorage.getItem('@auth:loginToken');
			  if (token !== null){
			 		this.props.fetchAvailableLoans(token);
			  }
			} catch (error) {
			  // Error retrieving data
			}
	}

	componentWillReceiveProps(nextProps){
		this.createDataSource(nextProps);
	}

	createDataSource(props){
		//creating a data source
		 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		 this.dataSource = ds.cloneWithRows(props.loanList);
	}

	
	 static navigationOptions = ({ navigation }) => ({
		    title: <Text style={styles.textHeader}>MY LOANS</Text>,
		    headerStyle : {
		    	backgroundColor: "#FF9F1C",
		    	height: 90,
		    },
		  	headerLeft: null,
		  	headerRight: null
	});

	
	render(){
		const buttons = ['Borrowed', 'Lent', 'Pending', 'Draft', 'Live'];
		return(
			<View>
				<ButtonGroup buttons={buttons} containerStyle={this.buttonGroupStyle} textStyle={{fontFamily: 'open-sans', fontSize: 10}} />
				<SearchBar round containerStyle={styles.searchContainerStyle} inputStyle={styles.inputContainerStyle} placeholder='Search Loans..' />
				<ListView enableEmptySections dataSource={this.dataSource} renderRow={(data) => <Loanlist loan={data} navigation={this.props.navigation} />} />
			</View>
		);	
	}	
}


const styles = StyleSheet.create({
	

	searchContainerStyle: {
		backgroundColor: 'transparent',
		borderTopWidth: 0,
		borderBottomWidth: 0,
	},

	buttonGroupStyle: {
		height: 50
	},

	inputContainerStyle: {
		backgroundColor: '#fff',
		borderColor: '#d6d4d4',
		borderWidth: 1,
		fontSize: 12,
		fontFamily: FONT_NORMAL,
	},

	textHeader: {
		fontFamily: 'open-sans-bold', 
		color: '#eee',
		fontWeight: '500',
		fontSize: 20,
		letterSpacing: 4
	}

});

function mapStateToProps(state){
	return{
		token: state.auth_login.detail.loginToken,
		loading: state.user_loan.loading,
		loanList: state.user_loan.loans,
	}
}



export default connect(mapStateToProps, { fetchAvailableLoans })(Loans);
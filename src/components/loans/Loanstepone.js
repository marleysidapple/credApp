import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Loanstepone extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<Text>This is loan Step One</Text>
		);
	}

}

export default Loanstepone;
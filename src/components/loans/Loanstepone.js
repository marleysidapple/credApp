import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
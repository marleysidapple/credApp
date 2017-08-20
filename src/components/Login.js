import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, ActivityIndicator, Keyboard } from 'react-native';
import Input from './../elements/Input';
import { handleLoginForm, validateLoginCredential } from './../actions/Authentication';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

class Login extends Component {
	constructor(props){
		super(props);
	}

	// static navigationOptions = ({ navigation, styles }) => {
	// 	return {
	// 	    title: <Text style={{fontFamily: 'open-sans'}}>Login</Text>,
	// 	};
	// };

	onLoginPress(){
		Keyboard.dismiss();
		if(this.props.email == "" || this.props.password == ""){
			Alert.alert(
				"missing data",
				"All fields are mandatory"
			);
		} else{
			const user = {
				user_name: this.props.email,
				pwd: this.props.password
			}
			this.props.validateLoginCredential(user);
		}
	}

	componentWillReceiveProps(nexProps){
		if (nexProps.detail != null && nexProps.detail.status == 'error'){
			Alert.alert(
				'Authentication failed',
				'Invalid email/password'
			);
		} else if(nexProps.detail != null && nexProps.detail.status == 'success'){
			this.props.navigation.navigate('Loans');
		}
	
	}

	 showEitherButtonOrSpinner(){
	    if (this.props.loading){
	      return <ActivityIndicator size={'small'}/>;
	    }
	    return  <Button onPress={this.onLoginPress.bind(this)} buttonStyle={styles.loginButton} textStyle={styles.loginBtnTextStyle}  title={`Login`}/>
	  }


	render(){
		return(
			<View style={styles.loginWrapper}>
				<Image source={require('./../../assets/images/logo2.png')} style={styles.logo}  resizeMode={'contain'} />

				<Input iconName={'envelope-o'}
                       placeholder={'Enter your email'}
                       value={this.props.email}
                       onInputChange={(value) => this.props.handleLoginForm({prop:'email', value: value})} 
                />

                <Input iconName={'key'}
                       placeholder={'Enter your password'}
                       secureTextEntry={true}
                       value={this.props.password}
                       onInputChange={(value) => this.props.handleLoginForm({prop: 'password', value: value})}
                />

                {this.showEitherButtonOrSpinner()}

				 <View style={styles.linkToRegister}>
                            <Text style={styles.registerInfo}>{'Dont have an account? '}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                              <Text style={styles.registerInfo}>{'Register Now'}</Text>
                            </TouchableOpacity>
                          </View>
			</View>
		);
	}
}


export const styles = StyleSheet.create({
	loginWrapper: {
		flex: 1,
		justifyContent: 'center',
	},

	registerInfo: {
		fontFamily: 'open-sans',
		color: '#636A73'
		
	},

	linkToRegister: {
   		flexDirection: 'row',
    	alignSelf: 'center',
		marginTop: 20,
		justifyContent: 'center'		
  	},

	logo: {
	  	alignSelf: 'center',
	 },

	loginButton: {
		backgroundColor: '#3EA7D9', 
		borderRadius: 2,
		marginTop: 15,
	},
	registrationHeader:{
		fontFamily: 'open-sans',
		paddingRight: 10
	},
	loginBtnTextStyle: {
		textAlign: 'center',
		fontFamily: 'open-sans'
	}
})

function mapStateToProps(state, props){
  return {
  	  detail: state.auth_login.detail,
      email: state.auth_login.email,
      password: state.auth_login.password,
      success: state.auth_login.success,
      token: state.auth_login.token,
      loading: state.auth_login.loading,
      err: state.auth_login.err
  };
}

export default connect(mapStateToProps, { handleLoginForm, validateLoginCredential})(Login);
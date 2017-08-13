import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Input from './../elements/Input';
import { Button } from 'react-native-elements';
import './../../assets/css/globalcss';

class Login extends Component {
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		  headerRight: <Text>Register</Text>
	}

	render(){
		return(
			<View style={styles.loginWrapper}>
				<Image source={require('./../../assets/images/logo.png')} style={styles.logo}  resizeMode={'contain'} />

				<Input iconName={'envelope-o'}
                       placeholder={'Enter your email'}
                />

                <Input iconName={'key'}
                       placeholder={'Enter your password'}
                       secureTextEntry={true}
                />

                <Button
						  onPress={() => this.props.navigation.navigate('Login')}
						  buttonStyle={styles.loginButton}
						  textStyle={{textAlign: 'center'}}
						  title={`Login`}
						/>

				 <View style={styles.linkToRegister}>
                            <Text style={styles.registerInfo}>{'Dont have an account? '}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                              <Text style={styles.registerInfo}>{'Click here to register'}</Text>
                            </TouchableOpacity>
                          </View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
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
	  	alignSelf: 'center'
	 },

	loginButton: {
		backgroundColor: '#3EA7D9', 
		borderRadius: 2,
		marginTop: 10,
	}
})

export default Login;
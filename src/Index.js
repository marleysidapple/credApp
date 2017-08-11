import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


class Index extends Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<View style={styles.indexWrapper}>
					<Image source={require('./../assets/images/logo.png')} style={styles.logo}  resizeMode={'contain'} />
					<Text style={styles.main}>Relationship Lending Platform</Text>

					<TouchableOpacity style={styles.startButton}>
						<Button
						  buttonStyle={{backgroundColor: '#86C15D', borderRadius: 2}}
						  textStyle={{textAlign: 'center'}}
						  title={`Get Started`}
						/>
					</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  main: {
   fontFamily: 'open-sans', 
   marginTop: 5,
   color: '#fff'
  }, 

  indexWrapper: {
  	flex: 1,
  	backgroundColor: '#3EA7D9',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
  	alignSelf: 'center'
  },

  startButton: {
  	marginTop: 20,
  	alignSelf: 'stretch'
  }
});


export default Index;
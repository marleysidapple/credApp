import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import Index from './src/Index';
import Router from './src/routes/Router';

class App extends Component {

  constructor(props){
    super(props);
     this.state = {
      fontLoaded: false
    }
  }


  async componentDidMount() {
       await Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      });
      this.setState({ fontLoaded: true });
    }


  render() {
    return (
      <View style={styles.container}>
          {
            this.state.fontLoaded ? (
              <Router />
            ) : null
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
  },
});

export default App;

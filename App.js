//entry point
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';
import Index from './src/Index';
import AppWithNavigationState from './src/routes/Router';
//adding redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './src/reducers';

const store = applyMiddleware(thunk, promise)(createStore);

class App extends Component {

  constructor(props){
    super(props);
     this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount() {
       await Font.loadAsync({
        'open-sans': require('./assets/fonts/lato/Lato-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/lato/Lato-Bold.ttf'),
      });
      this.setState({ fontLoaded: true });
    }


  render() {
    return (
      <View style={styles.container}>
          {
            this.state.fontLoaded ? (
              <Provider store={store(reducers)}>
                  <AppWithNavigationState />
              </Provider>
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
  
 containerFull: {
 
 },
});

export default App;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Listing from './screens/Listing';
import Header from './components/Header';
import Details from './screens/Details';
import Footer from './components/Footer';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.setWorkout = this.setWorkout.bind(this);

    this.state = {
      workoutId: null
    };
  }

  setWorkout(workoutId) {
    this.setState({
      workoutId
    })
  }

  render() {
    return (
      <View >
        <Header {...this.state} setWorkout={this.setWorkout} />
        {this.state.workoutId ? (
          <Details {...this.state} />
        ) : (
            <Listing setWorkout={this.setWorkout} />
          )}
          <Footer {...this.state} setWorkout={this.setWorkout}/>
      </View>
    );
  }
}

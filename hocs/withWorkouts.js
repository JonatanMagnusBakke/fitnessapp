import React from 'react';
import workouts from '../data/workouts';

const withWorkouts = Component => class extends React.Component {
    render () {
        return (
        <Component {...this.props} workouts={workouts} />
        );
    }
};

export default withWorkouts
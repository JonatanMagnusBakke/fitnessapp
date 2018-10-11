import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import withWorkout from '../hocs/withWorkouts';

const Details = props => {
    const workout = props.workouts.filter(workout => (workout.id === props.workoutId))[0];
    return (
        <View key={workout.id} style={styles.listItem}>
            <Image style={styles.fileImage} source={{
                uri: workout.image
            }} />
            <View>
                <Text style={styles.name}>{workout.name}</Text>
                <Text style={styles.bio}>{workout.bio}</Text>
            </View>
            <View>
                {workout.exercises.map(exercise => (
                    <Text key={exercise.id} style={styles.exercise}>{exercise.name}</Text>
                ))}
            </View>
            
        </View>
    )
}




const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#EEEEEE',
        padding: 12,
        marginBottom: 1,
    },
    fileImage: {
        width: 50,
        height: 50
    },
    name: {
        paddingLeft: 12,
        color: '#666',
        fontWeight: 'bold',
        fontSize: 20
    },
    bio: {
        fontSize: 16,
        paddingLeft: 12,
        paddingTop: 12,
        paddingRight: 50
    },
    exercise: {
        paddingLeft: 12,
        paddingTop: 10
    }
});


export default withWorkout(Details);
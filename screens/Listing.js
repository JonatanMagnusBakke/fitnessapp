import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import withWorkouts from '../hocs/withWorkouts';

const Listing = props => (
    <View style={styles.container}>
        <ScrollView>
            {props.workouts.map(workout => (
                <TouchableOpacity  key={workout.id} onPress={() => {
                    props.setWorkout(workout.id)
                }}>
                    <View style={styles.listItem}>
                        <Image style={styles.fileImage} source={{
                            uri: workout.image
                        }} />
                        <Text style={styles.name}>{workout.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#EEEEEE',
        padding: 12,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: "center"
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
    }
});


export default withWorkouts(Listing);
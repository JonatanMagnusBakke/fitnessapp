import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Header = props => props.workoutId ? (
    <TouchableOpacity onPress={() => {
        props.setWorkout(null);
    }}>
    <View style={styles.header}>
        <Text style={styles.title}>Back</Text>
    </View>
    </TouchableOpacity>
): (
    <View style={styles.header}>
        <Text style={styles.title}>Fitness App</Text>
    </View>
)


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#666666',
        paddingTop: 32,
        paddingBottom: 12
    },
    title: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
})

export default Header;
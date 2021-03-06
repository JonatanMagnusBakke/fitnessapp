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
        <Text style={styles.title}>Ready to workAAA?</Text>
    </View>
)


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#6395ed',
        paddingTop: 64,
        paddingBottom: 12
    },
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 32
    }
})

export default Header;
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Footer = props => props.workoutId ? (
    <TouchableOpacity onPress={() => {
        props.setWorkout(null);
    }}>
        <View style={styles.footer}>
            <Text style={styles.title}>Start</Text>
        </View>
    </TouchableOpacity>
) : (
        <View style={styles.footerHidden}>
            <Text style={styles.title}></Text>
        </View>
    )


const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#6395ed',
        paddingTop: 32,
        paddingBottom: 12,
        //left: 40,
        //top: 650,
        //position: 'absolute',
    },
    footerHidden: {
        backgroundColor: '#fff',

    },
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 32
    }
})

export default Footer;
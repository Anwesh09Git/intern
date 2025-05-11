import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import AuthScreen from './AuthScreen'; // Make sure this path is correct based on your file structure

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
            <AuthScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
});

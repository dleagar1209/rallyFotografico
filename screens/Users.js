import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Users() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuarios</Text>
            <Text>Funcionalidad mínima implementada.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
});
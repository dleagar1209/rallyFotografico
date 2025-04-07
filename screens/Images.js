import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Images() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Imágenes</Text>
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
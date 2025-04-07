import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a RallyFotografico</Text>
            <Text style={styles.description}>
                RallyFotografico es una aplicación que te permite participar en concursos de fotografía,
                compartir tus imágenes y competir con otros usuarios. ¡Únete y muestra tu talento!
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonSecondary]}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#555',
    },
    button: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 15,
        width: '80%',
        alignItems: 'center',
    },
    buttonSecondary: {
        backgroundColor: '#32CD32',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
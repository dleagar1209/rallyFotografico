import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Main({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {/* Ícono de configuración en esquina superior derecha */}
            <View style={styles.settingsIconContainer}>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="Abrir configuraciones"
                    onPress={() => {
                        navigation.navigate('Options');
                    }}
                >
                    <Icon name="settings-outline" size={24} color="#333" />
                </TouchableOpacity>
            </View>

            {/* Contenido principal */}
            <View style={styles.mainContent}>
                <Text style={styles.title}>Bienvenido/a</Text>

                <TouchableOpacity
                    style={styles.button}
                    accessible={true}
                    accessibilityLabel="Crear una sesión"
                    onPress={() => {
                        navigation.navigate('Rally');//La idea es insertar un parametro en la BD que indique el tipo de sesión.
                    }}
                >
                    <Text style={styles.buttonText}>Crear una sesión</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    accessible={true}
                    accessibilityLabel="Unirse a una sesión como participante"
                    onPress={() => {
                        // Lógica para unirse como participante
                    }}
                >
                    <Text style={styles.buttonText}>Unirse como participante</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    accessible={true}
                    accessibilityLabel="Unirse a una sesión como público"
                    onPress={() => {
                        // Lógica para unirse como público
                    }}
                >
                    <Text style={styles.buttonText}>Unirse como público</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
        position: 'relative',
    },
    settingsIconContainer: {
        position: 'absolute',
        top: 10,
        right: 20,
        zIndex: 1,
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#333',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        backgroundColor: '#4E79E2',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',
        elevation: 2, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    navBar: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        paddingVertical: 10,
        justifyContent: 'space-around',
    },
    navItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#333',
        marginTop: 2,
    },
});
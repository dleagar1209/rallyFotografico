import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Rally({ navigation }) {
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

            {/* Barra de navegación inferior */}
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => {
                        navigation.navigate('Rally');
                    }}
                    accessible={true}
                    accessibilityLabel="Ir a inicio"
                >
                    <Icon name="home-outline" size={24} color="#333" />
                    <Text style={styles.navText}>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => {
                        navigation.navigate('Images');
                    }}
                    accessible={true}
                    accessibilityLabel="Ir a sección de imágenes"
                >
                    <Icon name="image-outline" size={24} color="#333" />
                    <Text style={styles.navText}>Fotos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => {
                        navigation.navigate('Users');
                    }}
                    accessible={true}
                    accessibilityLabel="Ir al perfil de usuario"
                >
                    <Icon name="person-outline" size={24} color="#333" />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => {
                        navigation.navigate('Stats');
                    }}
                    accessible={true}
                    accessibilityLabel="Ir a otra sección"
                >
                    <Icon name="stats-chart-outline" size={24} color="#333" />
                    <Text style={styles.navText}>Estadísticas</Text>
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
        paddingTop: 60,
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
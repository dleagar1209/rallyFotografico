import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Ir a Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Ir a Options"
                onPress={() => navigation.navigate('Options')}
            />
            <Button
                title="Ir a SignUp"
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
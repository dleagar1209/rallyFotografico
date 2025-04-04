import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>SignUp Screen</Text>
            <Button
                title="Volver a Home"
                onPress={() => navigation.navigate('Home')}
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
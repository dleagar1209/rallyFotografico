import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { auth, firestore, createUserWithEmailAndPassword, doc, setDoc, serverTimestamp } from '../firebaseConfig';

const SignUpSchema = Yup.object().shape({
    name: Yup.string().required('Requerido'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{7,}$/,
            'La contraseña debe tener al menos 7 caracteres, una mayúscula, una minúscula y un carácter especial'
        )
        .required('Requerido'),
});

export default function SignUp({ navigation }) {
    const handleSignUp = async (values) => {
        try {
            const { email, password, name } = values;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const userId = userCredential.user.uid;
            await setDoc(doc(firestore, 'users', userId), {
                id: userId,
                nombre: name,
                email,
                fechaCreacion: serverTimestamp(),
            });
            Alert.alert('Usuario creado exitosamente');
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={SignUpSchema}
                onSubmit={handleSignUp}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre y Apellido"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Correo electrónico"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Contraseña"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                        />
                        {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

                        <Button title="Registrarse" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});
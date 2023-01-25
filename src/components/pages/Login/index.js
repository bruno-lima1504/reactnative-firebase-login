import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import firebase from '../../../database/firebaseConnection'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    const navigation = useNavigation();

    async function logar() {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((value) => {
                alert('Bem vindo!' + value.user.uid);                
                navigation.navigate('Home', {email: email });               
            })
            .catch((error) => {
                alert('algo deu errado')
                return
            })
        setEmail('');
        setPassword('');        
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.formText}>Email</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='digite seu email'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.formText}>Senha</Text>                
                <TextInput
                    style={[styles.formInput, { marginBottom: 35 }]}
                    placeholder='digite sua senha'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Button
                    title="logar"
                    onPress={logar}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        width: '90%',
    },
    formText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    formInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: '100%',
        padding: 10,
        height: 40,
        marginTop: 10,
        marginBottom: 10
    },
});


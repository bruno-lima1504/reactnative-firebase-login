import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import firebase from '../../../database/firebaseConnection'

export default function Home(){
    const route = useRoute();

    const navigation = useNavigation();

    async function logout(){
        await firebase.auth().signOut();
        alert('Você foi desconectado');
        navigation.navigate('Login')
    }

    return(
        <View style={styles.container}>            
                <Text style={styles.text}>{route.params?.email}</Text>
                <Button 
                    title="Logout"
                    onPress={ logout }
                />            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        marginBottom: 20,
    }
})
import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image } from 'react-native';

const Registrarse = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/login.png')} style={styles.imageppal} />
      <Text style={styles.textos}>Registro</Text>

      <View style={styles.login}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Nombre y Apellido" 
            style={styles.input} 
          />
          <TextInput 
            placeholder="Correo" 
            style={styles.input} 
          />
          <TextInput 
            placeholder="Clave" 
            secureTextEntry 
            style={styles.input} 
          />
          <TextInput 
            placeholder="Confirmar Clave" 
            secureTextEntry 
            style={styles.input} 
          />
        </View>

        <View style={styles.containerBotones}>
          <Button title="Registrarse" onPress={() => navigation.navigate('MainTabs')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Registrarse;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  imageppal: {
    height: '30%', // Ocupa el 20% de la altura
    width: '100%',
    resizeMode: 'contain',
  },
  textos: {
    fontSize: 25,
    marginVertical: 20, // Espaciado vertical entre la imagen y el texto
    textAlign: 'center', // Centra el texto
  },
  login: {
    width: '80%',
    alignItems: 'center',
    marginTop: 50, // Espacio entre el mensaje y la sección de login
  },
  inputContainer: {
    width: '100%', // Contenedor para los inputs
    alignItems: 'center', // Centra los inputs
  },
  input: {
    width: '100%', // Ocupa todo el ancho del contenedor
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc', // Color del borde (gris claro)
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40, // Altura del input
  },
  containerBotones: {
    width: '80%', // Asegura que el contenedor del botón ocupe el 80%
    alignItems: 'center', // Centra el contenido del botón
    marginTop: 20, // Espaciado superior entre inputs y botón
  },
});

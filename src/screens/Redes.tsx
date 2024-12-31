import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Linking } from 'react-native';

const Redes = ({ navigation }) => {
    const openFacebook = () => {
      Linking.openURL('https://www.facebook.com'); // Reemplaza con tu URL de Facebook
    };
    const openInstagram = () => {
      Linking.openURL('https://www.instagram.com/'); // Reemplaza con tu URL de Facebook
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../../assets/login.png')} // Reemplaza con tu imagen
        style={styles.image}
      />
      <Text style={styles.title}>Redes Sociales</Text>
      <Text style={styles.description}>
        Conéctate con nosotros a través de nuestras redes sociales. 
        ¡Sigue nuestras actualizaciones, participa en nuestras actividades y comparte tus experiencias!
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={openFacebook}
        >
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={openInstagram}
        >
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>

        
      </View>

      <Text style={styles.footer}>
        ¡No olvides utilizar el hashtag #BooMitosyLeyendas para compartir tus historias!
      </Text>
    </ScrollView>
  );
};

export default Redes;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555', // Color gris para el texto
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#7B5BF2', // Color de fondo del botón
    borderRadius: 20, // Bordes redondeados
    paddingVertical: 10, // Espaciado vertical dentro del botón
    paddingHorizontal: 20, // Espaciado horizontal dentro del botón
    marginBottom: 10, // Espaciado entre botones
    alignItems: 'center', // Centra el texto dentro del botón
    width: '80%', // Ancho del botón
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto del botón
    fontSize: 16, // Tamaño de la fuente del texto del botón
  },
  footer: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    color: '#888', // Color gris claro para el texto del pie de página
  }
});

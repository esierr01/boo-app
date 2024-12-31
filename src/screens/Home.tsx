import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/home.png')}
        style={{ height: 350, width: '100%' }}
      />

      <View>
        <Text style={styles.textos}>Bienvenido a Boo</Text>
        <Text style={styles.textos}>Mitos y Leyendas</Text>
      </View>

      <View style={styles.containeralterno}>
        <Image
          source={require('../../assets/ghost.png')}
          style={{ width: 100, height: 100, marginRight:10 }}
        />

        <View style={styles.containerBotones}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('MainTabs')}
          >
            <Text style={styles.buttonText}>Ir a Principal</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('IniciarSesion')}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Registrarse')}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containeralterno: {
    marginTop: 15,
    flexDirection: 'row', // Alinea los hijos en fila
    alignItems: 'center', // Centra verticalmente
    padding: 5,
  },
  containerBotones: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  textos: {
    marginTop: 5,
    fontSize: 25
  },
  button: {
    backgroundColor: '#7B5BF2', // Color de fondo del botón
    borderRadius: 10, // Bordes redondeados
    paddingVertical: 10, // Espaciado vertical dentro del botón
    paddingHorizontal: 20, // Espaciado horizontal dentro del botón
    marginBottom: 10, // Espaciado entre botones
    alignItems: 'center', // Centra el texto dentro del botón
    width: '90%', // Ancho del botón
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto del botón
    fontSize: 16, // Tamaño de la fuente del texto del botón
  }
});

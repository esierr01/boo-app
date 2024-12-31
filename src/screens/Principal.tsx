import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Principal = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textos}>Bienvenidos a Boo</Text>
        <Text style={styles.textos}>Mitos y Leyendas</Text>
      </View>

      <Image source={require('../../assets/principal.png')} style={styles.imageppal} />
      {/* Implementar cards aquí */}

      <View style={styles.containerVideo}>
        <Image
          source={require('../../assets/video.png')}
          style={styles.imagevideo}
        />
        <Image
          source={require('../../assets/video.png')}
          style={styles.imagevideo}
        />
      </View>
      <View style={styles.containerVideo}>
        <Image
          source={require('../../assets/video.png')}
          style={styles.imagevideo}
        />
        <Image
          source={require('../../assets/video.png')}
          style={styles.imagevideo}
        />
      </View>
    </ScrollView>
  );
};

export default Principal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#09184D',
    paddingVertical: 5
  },
  textos: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 25,
    color: '#fff'
  },
  imageppal: {
    height: 240,
    width: '100%'
  },
  containerVideo: {
    marginTop:6,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 15,
    gap:15
  },
  imagevideo: {
    height: 100,
    width: 160,
    paddingHorizontal: 40
  },
});

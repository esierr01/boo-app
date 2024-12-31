import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Principal from '../screens/Principal';
import IniciarSesion from '../screens/IniciarSesion';
import Registrarse from '../screens/Registrarse';
import Redes from '../screens/Redes';
import Compartir from '../screens/Compartir';
import Perfil from '../screens/Perfil';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Asignar íconos según el nombre de la ruta
          if (route.name === 'Principal') {
            iconName = focused ? 'home' : 'home-outline'; // Ícono para Principal
          } else if (route.name === 'Redes') {
            iconName = focused ? 'people' : 'people-outline'; // Ícono para Redes
          } else if (route.name === 'Compartir') {
            iconName = focused ? 'share' : 'share-outline'; // Ícono para Compartir
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline'; // Ícono para Perfil
          }

          // Retornar el ícono correspondiente
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF', // Color del ícono activo
        tabBarInactiveTintColor: 'gray',   // Color del ícono inactivo
      })}
    >
      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Redes" component={Redes} />
      <Tab.Screen name="Compartir" component={Compartir} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
      <Stack.Screen name="Registrarse" component={Registrarse} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

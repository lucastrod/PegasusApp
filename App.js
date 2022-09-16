import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ListaMateriasScreen from './src/screens/ListaMateriasScreen';

//Modulo Contacto
import ListaContactosScreen from './src/screens/contacto/ListaContactosScreen';
import DatosInstitucionScreen from './src/screens/contacto/DatosInstitucionScreen';
import ListaDocentesScreen from './src/screens/contacto/ListaDocentesScreen';

//Modulo Alumnos
import ListaAlumnosScreen from './src/screens/alumnos/ListaAlumnosScreen';
import ListaReporteScreen from './src/screens/alumnos/ListaReporteScreen';


const App = () => {

const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="ListaMateriasScreen" component={ListaMateriasScreen} options={{headerShown:false}} />
        <Stack.Screen name="ListaAlumnosScreen" component={ListaAlumnosScreen} options={{headerShown:false}} />
        <Stack.Screen name="ListaReporteScreen" component={ListaReporteScreen} options={{headerShown:false}} />
        <Stack.Screen name="ListaContactosScreen" component={ListaContactosScreen} options={{headerShown:false}} />
        <Stack.Screen name="DatosInstitucionScreen" component={DatosInstitucionScreen} options={{headerShown:false}} />
        <Stack.Screen name="ListaDocentesScreen" component={ListaDocentesScreen} options={{headerShown:false}} />
        

      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
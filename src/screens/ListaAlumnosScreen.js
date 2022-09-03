import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../themes/appTheme';



const ListaAlumnosScreen =({ navigation })=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Alumnos</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerAlumnos}>
            

              
    </SafeAreaView>
    </View>
  )
}

export default ListaAlumnosScreen;
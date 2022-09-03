import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';



const ListaDocentesScreen =({ navigation })=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Docentes</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerMaterias}>
            
              
    </SafeAreaView>
    </View>
  )
}

export default ListaDocentesScreen;
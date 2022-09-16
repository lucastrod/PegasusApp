import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';



const ListaReporteScreen =({ navigation })=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Reporte</Text></SafeAreaView>       
    </View>
  )
}

export default ListaReporteScreen;
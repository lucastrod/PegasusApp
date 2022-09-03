import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-vector-icons/Feather';
import { styles } from '../themes/appTheme';



const HomeScreen =({ navigation })=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Menu Principal</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainer}>
            <TouchableOpacity
                style={{ 
                    ...styles.botonFlatList,
                }}
                onPress={ () => navigation.navigate('ListaMateriasScreen')}
            >
                <View style={styles.containerTexto} >
                  <Text style={ styles.textoFlatlist }>Asistencia</Text>
                  <Image
                    source={{uri: 'https://i.pinimg.com/564x/cc/ff/60/ccff6049e906fb0e1f5babe20db1a065.jpg'}}
                    style={styles.box}
                />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ 
                    ...styles.botonFlatList,
                }}
                onPress={ () => navigation.navigate('ListaContactosScreen')}
            >
                <View style={styles.containerTexto} >
                  <Text style={ styles.textoFlatlist }>Contacto</Text>
                  <Image
                    source={{uri: 'https://i.pinimg.com/564x/cc/ff/60/ccff6049e906fb0e1f5babe20db1a065.jpg'}}
                    style={styles.box}
                />
                </View>
            </TouchableOpacity>

              
    </SafeAreaView>
    </View>
  )
}

export default HomeScreen;
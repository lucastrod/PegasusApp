import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';



const ListaContactosScreen =({ navigation })=> {
    
    return (
    <View style={styles.fondoApp}>
    <SafeAreaView><Text style={styles.title}>Contacto</Text></SafeAreaView>       
    <SafeAreaView style={styles.menuContainerMaterias}>
            <TouchableOpacity
                style={{ 
                    ...styles.botonFlatList,
                }}
                onPress={ () => navigation.navigate('DatosInstitucionScreen')}
            >
                <View style={styles.containerTexto} >
                  <Text style={ styles.textoFlatlist }>Institución</Text>
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
                onPress={ () => navigation.navigate('ListaDocentesScreen')}
            >
                <View style={styles.containerTexto} >
                  <Text style={ styles.textoFlatlist }>Docentes</Text>
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

export default ListaContactosScreen;
import React, { useState } from "react";
import { Text, Switch, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../themes/appTheme';

import Icon from 'react-native-vector-icons/Feather';

const ListaAlumnosScreen =({ navigation })=> {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    
    return (
      <View style={styles.fondoApp}>
      <SafeAreaView><Text style={styles.title}>Alumnos</Text></SafeAreaView>       
      <SafeAreaView style={styles.menuContainerDatosAlumnos}>

        <Text style={ styles.textoAlumnos }> 
          <Icon 
              name="user" 
              size={25} 
              color={"black"}
          /> Lucas Castro
            <View style={{marginLeft:-0}}>
              <Switch
                trackColor={{ true: "#36B37E",false: "#767577", }}
                thumbColor={isEnabled ? "#36B37E" : "#DB2843"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </Text>

          <Text style={ styles.textoAlumnos }> 
          <Icon 
              name="user" 
              size={25} 
              color={"black"}
          /> Santiago Linares
            <View style={{marginLeft:-0}}>
              <Switch
                trackColor={{ true: "#36B37E",false: "#767577", }}
                thumbColor={isEnabled ? "#36B37E" : "#DB2843"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </Text>

          <Text style={ styles.textoAlumnos }> 
          <Icon 
              name="user" 
              size={25} 
              color={"black"}
          /> Rodrigo Santalla
            <View style={{marginLeft:-0}}>
              <Switch
                trackColor={{ true: "#36B37E",false: "#767577", }}
                thumbColor={isEnabled ? "#36B37E" : "#DB2843"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </Text>

          <Text style={ styles.textoAlumnos }> 
          <Icon 
              name="user" 
              size={25} 
              color={"black"}
          /> Santiago Traverso
            <View style={{marginLeft:-0}}>
              <Switch
                trackColor={{ true: "#36B37E",false: "#767577", }}
                thumbColor={isEnabled ? "#36B37E" : "#DB2843"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </Text>

          <Text style={ styles.textoAlumnos }> 
          <Icon 
              name="user" 
              size={25} 
              color={"black"}
          /> Ivan Luetich
            <View style={{marginLeft:-0}}>
              <Switch
                trackColor={{ true: "#36B37E",false: "#767577", }}
                thumbColor={isEnabled ? "#36B37E" : "#DB2843"}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </Text>    
      </SafeAreaView>
      <View style={{marginTop:30}}></View>
      <SafeAreaView style={{flexDirection:'row'}}>
            <TouchableOpacity
                  style={{ 
                      ...styles.boton,
                  }}
                  onPress={ () => navigation.navigate('ListaReporteScreen')  }
              >
                  <Text style={ styles.textoBoton }>Ver Reporte</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={{ 
                      ...styles.boton,
                  }}
                  onPress={ () => navigation.navigate('CifradosScreen')  }
              >
                  <Text style={ styles.textoBoton }>Guardar</Text>
              </TouchableOpacity>
            </SafeAreaView>
      </View>
  )
}

export default ListaAlumnosScreen;


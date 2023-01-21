import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProp {
  nombreSeccion: string;
  contenido: string;
  contenidoSize: number;
}
const SeccionDetalle = ({contenido, nombreSeccion, contenidoSize}: IProp) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    nombreSeccion: {
      fontWeight: '800',
      fontSize: 14,
      color: '#989898',
    },
    contenido: {
      color: 'black',
      fontWeight: '800',
      fontSize: contenidoSize ? contenidoSize : 20,
      marginVertical: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.nombreSeccion}>{nombreSeccion}</Text>
      <Text style={styles.contenido}>{contenido}</Text>
    </View>
  );
};

export default SeccionDetalle;

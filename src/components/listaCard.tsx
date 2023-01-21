import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListaCard = () => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/imageIcon.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.productoContainer}>
        <Text style={styles.producto}>Nombre del producto</Text>
        <Text>26 de enero, 2019</Text>
      </View>
      <View style={styles.puntajeContainer}>
        <Text style={styles.signo}>+</Text>
        <Text style={styles.puntaje}>100</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="chevron-right" size={15} color="black" solid />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  productoContainer: {
    flex: 3,
    paddingLeft: 10,
  },
  producto: {
    fontSize: 14,
    fontWeight: '800',
    color: 'black',
  },
  fecha: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  puntajeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  signo: {
    fontWeight: '800',
    fontSize: 16,
    color: '#00B833',
    paddingRight: 5,
  },
  puntaje: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000000',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListaCard;

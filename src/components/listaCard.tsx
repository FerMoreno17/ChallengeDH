import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RootStackParamList} from '../App';
import {Producto} from '../models/productoModel';
import {setCurrentItem} from '../redux/challengeReducer';
import {useDispatch} from 'react-redux';
import {getParseDate} from '../utils/parseDate.helper';

interface IProp {
  producto: Producto;
}

const ListaCard = ({producto}: IProp) => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function verDetalle() {
    dispatch(setCurrentItem(producto));
    return navigation.navigate('Detalle');
  }

  return (
    <Pressable style={styles.container} onPress={verDetalle}>
      <View style={styles.imageContainer}>
        <Image source={{uri: producto.image}} style={styles.image} />
      </View>
      <View style={styles.productoContainer}>
        <Text style={styles.producto}>{producto.product}</Text>
        <Text>{getParseDate(producto.createdAt!)}</Text>
      </View>
      <View style={styles.puntajeContainer}>
        <Text
          style={[
            styles.signo,
            producto.is_redemption ? styles.rojo : styles.verde,
          ]}>
          {producto.is_redemption ? '- ' : '+ '}
        </Text>
        <Text style={styles.puntaje}>{producto.points}</Text>
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
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  productoContainer: {
    flex: 4,
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
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  signo: {
    fontWeight: '800',
    fontSize: 16,
    paddingRight: 5,
  },
  verde: {
    color: '#00B833',
  },
  rojo: {
    color: 'red',
  },
  puntaje: {
    fontWeight: '800',
    fontSize: 16,
    color: '#000000',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
});

export default ListaCard;

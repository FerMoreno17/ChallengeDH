import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import {RootStackParamList} from '../App';
import Boton from '../components/boton';
import SeccionDetalle from '../components/seccionDetalle';
import {useAppSelector} from '../redux/store';
import {getParseDate} from '../utils/parseDate.helper';

const Detalle = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {item} = useAppSelector(state => state.challenge);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#CFD6FF'} />
      <View style={styles.header}>
        <Text style={styles.titulo}>{item.product}</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <View style={styles.detalleContainer}>
            <SeccionDetalle
              nombreSeccion={'Detalle del producto:'}
              contenido={getParseDate(item.createdAt!)}
              contenidoSize={16}
            />
            <SeccionDetalle
              nombreSeccion={
                item.is_redemption
                  ? 'Con esta acción canjeaste'
                  : 'Con esta compra acumulaste:'
              }
              contenido={`${item.points} puntos`}
              contenidoSize={24}
            />
          </View>
        </View>

        <View style={styles.action}>
          <Boton
            label="Aceptar"
            labelSize={16}
            onPress={() => navigation.pop()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#CFD6FF',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 24,
    color: 'black',
    fontWeight: '800',
  },
  main: {
    flex: 9,
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  body: {
    flex: 8,
  },
  imageContainer: {
    flex: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 300,
    height: 300,
  },
  detalleContainer: {
    flex: 2,
    paddingVertical: 20,
  },
  action: {flex: 1},
});

export default Detalle;

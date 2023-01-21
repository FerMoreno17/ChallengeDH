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

const Detalle = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#CFD6FF'} />
      <View style={styles.header}>
        <Text style={styles.titulo}>Nombre del producto</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/imageIcon.png')} />
          </View>
          <View style={styles.detalleContainer}>
            <SeccionDetalle
              nombreSeccion={'Detalle del producto:'}
              contenido={'Comprado el 26 de enero, 2019'}
              contenidoSize={16}
            />
            <SeccionDetalle
              nombreSeccion={'Con esta compra acumulaste:'}
              contenido={'100 puntos'}
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
  detalleContainer: {
    flex: 2,
    paddingVertical: 20,
  },
  action: {flex: 1},
});

export default Detalle;

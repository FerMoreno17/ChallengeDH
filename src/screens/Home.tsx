import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import Boton from '../components/boton';
import PuntosCard from '../components/puntosCard';
import SeccionHome from '../components/seccionHome';
import ListaCard from '../components/listaCard';
import {useDispatch} from 'react-redux';
import {setListado} from '../redux/challengeReducer';
import {useAppSelector} from '../redux/store';

function Home(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {listado} = useAppSelector(state => state.challenge);

  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    setLoading(true);
    await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products')
      .then(response => response.json())
      .then(json => {
        dispatch(setListado(json));
        setLoading(false);
      })
      .catch(error => {
        console.log('errorFetch==>', error);
      });
  }

  if (loading || listado === undefined) {
    <ActivityIndicator size={'large'} color={'#334FFA'} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <StatusBar backgroundColor={'#F4F4F4'} />
        <View style={styles.body}>
          <View style={styles.bienvenidaContainer}>
            <Text style={styles.bienvenida}>Bienvenido de vuelta!</Text>
            <Text style={styles.usuario}>Rubén Rodríguez</Text>
          </View>
          <View style={styles.seccionContainer}>
            <SeccionHome
              title={'TUS PUNTOS'}
              children={
                <PuntosCard mes={'Diciembre'} totalPuntos={'10,00.00'} />
              }
            />
            {/*hacer le flatlist */}
            <SeccionHome title={'TUS MOVIMIENTOS'} children={<ListaCard />} />
          </View>
        </View>

        {/*colocar logica para el filtro */}
        <View style={styles.action}>
          <View style={styles.cajaBotonesContainer}>
            <View style={styles.cajaBotones}>
              <Boton
                label={'Ganados'}
                labelSize={12}
                onPress={() => navigation.navigate('Detalle')}
              />
            </View>
            <View style={styles.cajaBotones}>
              <Boton
                label={'Todos'}
                labelSize={12}
                onPress={() => navigation.navigate('Detalle')}
              />
            </View>
          </View>
          <Boton
            label={'Todos'}
            labelSize={16}
            onPress={() => navigation.navigate('Detalle')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  main: {flex: 1, padding: 20},
  body: {flex: 8},
  bienvenidaContainer: {flex: 1},
  bienvenida: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
  },
  usuario: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  seccionContainer: {flex: 7},
  action: {flex: 1},
  cajaBotonesContainer: {
    flexDirection: 'row',
  },
  cajaBotones: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default Home;

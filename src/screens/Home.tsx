import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Boton from '../components/boton';
import PuntosCard from '../components/puntosCard';
import SeccionHome from '../components/seccionHome';
import ListaCard from '../components/listaCard';
import {useDispatch} from 'react-redux';
import {setListado} from '../redux/challengeReducer';
import {useAppSelector} from '../redux/store';
import {Dimensions} from 'react-native';
import {Producto} from '../models/productoModel';

function Home(): JSX.Element {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {listado} = useAppSelector(state => state.challenge);
  const [showTodos, setShowTodos] = useState(false);
  const [filtro, setFiltro] = useState<Producto[] | undefined>();

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

  useEffect(() => {
    if (listado) {
      setFiltro(listado);
    }
  }, [listado]);

  function filter(type: string) {
    setShowTodos(!showTodos);

    if (type === 'todos') {
      return setFiltro(listado);
    }
    if (type === 'ganados') {
      let res = listado.filter(item => item.is_redemption === false);
      setFiltro(res);
    }
    if (type === 'canjeados') {
      let res = listado.filter(item => item.is_redemption === true);
      setFiltro(res);
    }
  }

  if (loading || listado === undefined) {
    <ActivityIndicator size={'large'} color={'#334FFA'} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#F4F4F4'} />
      <View style={styles.main}>
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
            <SeccionHome
              title={'TUS MOVIMIENTOS'}
              children={
                <View style={styles.flatlistContainer}>
                  <FlatList
                    data={filtro}
                    renderItem={({item}) => <ListaCard producto={item} />}
                    keyExtractor={item => item.id!.toString()}
                  />
                </View>
              }
            />
          </View>
        </View>
        <View style={styles.action}>
          {!showTodos && (
            <View style={styles.cajaBotonesContainer}>
              <View style={styles.cajaBotones}>
                <Boton
                  label={'Ganados'}
                  labelSize={12}
                  onPress={() => filter('ganados')}
                />
              </View>
              <View style={styles.cajaBotones}>
                <Boton
                  label={'Canjeados'}
                  labelSize={12}
                  onPress={() => filter('canjeados')}
                />
              </View>
            </View>
          )}
          {showTodos && (
            <Boton
              label={'Todos'}
              labelSize={16}
              onPress={() => filter('todos')}
            />
          )}
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
  main: {
    flex: 1,
    padding: 20,
  },
  body: {
    flex: 8,
  },
  bienvenidaContainer: {
    flex: 1,
  },
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
  seccionContainer: {
    flex: 9,
  },
  flatlistContainer: {
    width: '95%',
    borderRadius: 20,
    maxHeight: Dimensions.get('screen').height * 0.35,
  },
  action: {
    flex: 1,
  },
  cajaBotonesContainer: {
    flexDirection: 'row',
  },
  cajaBotones: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default Home;

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
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

function Home(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <StatusBar backgroundColor={'#F4F4F4'} />
          <View>
            <View>
              <Text style={styles.bienvenida}>Bienvenido de vuelta!</Text>
              <Text style={styles.usuario}>Rubén Rodríguez</Text>
            </View>
            <SeccionHome
              title={'TUS PUNTOS'}
              children={
                <PuntosCard mes={'Diciembre'} totalPuntos={'10,00.00'} />
              }
            />
            <SeccionHome title={'TUS MOVIMIENTOS'} children={<ListaCard />} />
          </View>
          <View>
            <Boton label="Press" onPress={() => navigation.navigate('Home')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  bienvenida: {
    fontSize: 20,
    color: 'black',
    fontWeight: '800',
    lineHeight: 27.32,
  },
  usuario: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    lineHeight: 21.8,
  },
});

export default Home;

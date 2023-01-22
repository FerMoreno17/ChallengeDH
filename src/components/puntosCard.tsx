import React from 'react';
import {ActivityIndicator} from 'react-native';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

interface IProp {
  mes: string;
  totalPuntos: string;
}

const PuntosCard = ({mes, totalPuntos}: IProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mes}>{mes}</Text>
      {totalPuntos === 'cargando' ? (
        <ActivityIndicator size={'large'} color={'white'} />
      ) : (
        <Text style={styles.totalPuntos}>{totalPuntos + ' pts'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.8,
    height: Dimensions.get('screen').height * 0.18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#334FFA',
    borderRadius: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  mes: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'flex-start',
  },
  totalPuntos: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
  },
});

export default PuntosCard;

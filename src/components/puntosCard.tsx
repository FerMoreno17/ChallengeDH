import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

interface IProp {
  mes: string;
  totalPuntos: string;
}

const PuntosCard = ({mes, totalPuntos}: IProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mes}>{mes}</Text>
      <Text style={styles.totalPuntos}>{totalPuntos + ' pts'}</Text>
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
  },
  mes: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 21.8,
    alignSelf: 'flex-start',
  },
  totalPuntos: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 43.7,
  },
});

export default PuntosCard;

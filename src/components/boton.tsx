import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

interface IProp {
  label: string;
  onPress: () => void;
}

const Boton = ({label, onPress}: IProp) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#334FFA',
    borderRadius: 15,
    marginVertical: 5,
  },
  label: {color: 'white', fontSize: 18},
});

export default Boton;

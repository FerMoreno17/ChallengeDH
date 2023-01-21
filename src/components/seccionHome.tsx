import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProp {
  title: string;
  children: any;
}

const SeccionHome = ({title, children}: IProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  title: {
    color: '#989898',
    fontSize: 14,
    lineHeight: 19.12,
    marginBottom: 20,
  },
  children: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SeccionHome;

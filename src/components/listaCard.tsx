import React from 'react';
import {Text, StyleSheet, Pressable, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListaCard = () => {
  return (
    <Pressable style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Image
            source={require('../assets/imageIcon.png')}
            style={styles.image}
          />
        </View>
        <View style={{flex: 3}}>
          <Text>Nombre del producto</Text>
          <Text>26 de enero, 2019</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>+ 100</Text>
        </View>
        <View style={{flex: 1}}>
          <Icon name="comments" size={30} color="#900" solid />
        </View>
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
  },
  image: {
    width: 60,
    height: 50,
  },
});

export default ListaCard;

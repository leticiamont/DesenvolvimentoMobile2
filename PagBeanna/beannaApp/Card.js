import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Card = ({ title, preco }) => {
  const CliqueCompra = () => {
    Alert.alert("Produto adicionado ao carrinho");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>R$ {preco}</Text>
      <TouchableOpacity style={styles.button} onPress={CliqueCompra}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%', 
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Card;

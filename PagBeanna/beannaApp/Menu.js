import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Menu() {
  const cliqueMenu = (categoria) => {
    alert(`Você clicou em: ${categoria}`);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => cliqueMenu('Blusas')}>
        <Text style={styles.menuText}>Blusas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => cliqueMenu('Calças')}>
        <Text style={styles.menuText}>Calças</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => cliqueMenu('Vestidos')}>
        <Text style={styles.menuText}>Vestidos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
  },
  menuText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

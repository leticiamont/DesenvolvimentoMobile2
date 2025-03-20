import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Menu from './Menu';
import Card from './Card';
import BannerImage from './assets/banner.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Beanna</Text>

      {/* Banner */}
      <Image source={BannerImage} style={styles.banner} />

      {/* Menu */}
      <Menu />

      {/* Grid de Cards (2 por linha) */}
      <View style={styles.grid}>
        <View style={styles.row}>
          <Card title="Blusa Lorena" preco="69,90" />
          <Card title="Blusa Beatriz" preco="65,00" />
        </View>
        <View style={styles.row}>
          <Card title="Calça Victoria" preco="140,00" />
          <Card title="Vestido Laura" preco="99,90" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#f4f4f4'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  banner: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  grid: {
    alignItems: 'center', // Centraliza os itens na grade
  },
  row: {
    flexDirection: 'row', // Cards lado a lado
    justifyContent: 'space-between',
    width: '80%', // Define a largura da linha
    marginBottom: 10, // Espaço entre as linhas
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Rota = '/triangulo' | '/quadrado' | '/retangulo' | '/circulo';

const formas: { nome: string; imagem: any; rota: Rota }[] = [
  { nome: 'Triângulo', imagem: require('../assets/triangulo.png'), rota: '/triangulo' },
  { nome: 'Quadrado', imagem: require('../assets/quadrado.webp'), rota: '/quadrado' },
  { nome: 'Retângulo', imagem: require('../assets/retangulo.webp'), rota: '/retangulo' },
  { nome: 'Círculo', imagem: require('../assets/circulo.png'), rota: '/circulo' },
];

const router = useRouter();

export default function SelecaoFormas() {
   return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#033E8C" />
      </TouchableOpacity>

      <Text style={styles.title}>Área e Perímetro</Text>
      <Text style={styles.subtitle}>Escolha uma forma:</Text>

      <View style={styles.grid}>
        {formas.map((forma, index) => (
          <Link key={index} href={forma.rota} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={forma.imagem} style={styles.image} resizeMode="contain" />
              <Text style={styles.label}>{forma.nome}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  container: {
    padding: 24,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
  },
  title: {
    color:"#F23D91",
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    width: 120,
    height: 120,
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Quadrado() {
  const [lado, setLado] = useState<string>('');
  const [area, setArea] = useState<number | null>(null);
  const [perimetro, setPerimetro] = useState<number | null>(null);

  const calcular = () => {
    const l = parseFloat(lado);
    const areaCalc = l * l; // Área = lado²
    const perimetroCalc = 4 * l; // Perímetro = 4 * lado
    setArea(areaCalc);
    setPerimetro(perimetroCalc);
  };

  const router = useRouter();

   return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#033E8C" />
      </TouchableOpacity>

        <Text style={styles.title}>CÍRCULO</Text>
  
        <Image source={require('../assets/quadrado.webp')} style={styles.image} resizeMode="contain" />
  
        <View style={styles.formulas}>
          <Text style={styles.formulaText}>Área = lado² </Text>
          <Text style={styles.formulaText}>Perímetro = 4 × lado</Text>
        </View>
  
        <TextInput
          placeholder="Digite o valor do lado"
          value={lado}
          onChangeText={setLado}
          keyboardType="numeric"
          style={styles.input}
        />
  
        <TouchableOpacity style={styles.botao} onPress={calcular}>
          <Text style={styles.botaoTexto}>Calcular</Text>
        </TouchableOpacity>
  
        {area !== null && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>Área: {area.toFixed(2)} m²</Text>
            <Text style={styles.resultText}>Perímetro: {perimetro?.toFixed(2)} m</Text>
          </View>
        )}
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
    botao:{
      backgroundColor: "#033E8C",
      padding: 10, 
      borderRadius: 8,
    },
    botaoTexto: {
      color: "white",
      textAlign: 'center', 
      fontWeight: 'bold',
    },
    title: {
      color: "#F23D91",
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    image: {
      width: 200,
      height: 120,
      marginVertical: 16,
    },
    description: {
      textAlign: 'center',
      fontSize: 14,
      color: '#333',
      marginBottom: 20,
    },
    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 12,
      width: '100%',
      marginBottom: 12,
      borderColor: '#ccc',
      borderWidth: 1,
    },
    resultBox: {
      backgroundColor: '#F23D91',
      borderRadius: 10,
      padding: 16,
      marginTop: 20,
      width: '100%',
    },
    resultText: {
      color: '#fff',
      fontSize: 16,
      marginBottom: 4,
    },
    formulas: {
      marginTop: 24,
      alignItems: 'center',
    },
    formulaText: {
      fontSize: 14,
      fontStyle: 'italic',
      color: '#333',
    },
  });
  
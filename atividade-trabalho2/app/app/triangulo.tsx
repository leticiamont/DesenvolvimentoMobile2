import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Triangulo() {
  const [base, setBase] = useState<string>('');
  const [altura, setAltura] = useState<string>('');
  const [lado1, setLado1] = useState<string>('');
  const [lado2, setLado2] = useState<string>('');
  const [area, setArea] = useState<number | null>(null);
  const [perimetro, setPerimetro] = useState<number | null>(null);

  const calcular = () => {
    const b = parseFloat(base);
    const h = parseFloat(altura);
    const l1 = parseFloat(lado1);
    const l2 = parseFloat(lado2);
    const areaCalc = (b * h) / 2;
    const perimetroCalc = b + l1 + l2;
    setArea(areaCalc);
    setPerimetro(perimetroCalc);
  };

  const router = useRouter();

   return (
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#033E8C" />
      </TouchableOpacity>

      <Text style={styles.title}>TRIÂNGULO</Text>

      <Image source={require('../assets/triangulo.png')} style={styles.image} resizeMode="contain" />

      <Text style={styles.description}>
        <View style={styles.formulas}>
          <Text style={styles.formulaText}>Área = (base × altura) ÷ 2</Text>
          <Text style={styles.formulaText}>Perímetro = base + lado1 + lado2</Text>
        </View>
      </Text>

      <TextInput
        placeholder="Digite o valor da base"
        value={base}
        onChangeText={setBase}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Digite o valor da altura"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Digite o valor do lado 1"
        value={lado1}
        onChangeText={setLado1}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="Digite o valor do lado 2"
        value={lado2}
        onChangeText={setLado2}
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

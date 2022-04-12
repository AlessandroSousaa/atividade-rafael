import React, {useState} from 'react'
import { Text, TextInput , View, TouchableOpacity } from 'react-native'

import styles from './style'; //importando o style





    export default function Form() {
      const [nota1, setNota1] = useState('');
      const [nota2, setNota2] = useState('');
      const [nota3, setNota3] = useState('');
      const [total, setTotal] = useState(0);
  
      const x = parseFloat(total);
      const por = x / 3;
  
      function gerarResultado() {
          setTotal(Number(nota1) + Number(nota2) + Number(nota3));
          Keyboard.dismiss();
      }
  
    return (
      <View style={styles.container}>
          <Text style={styles.tittle}>Minha Média</Text>
  
          <TextInput
              style={styles.input}
              maxLength={4}
              keyboardType='decimal-pad'
              placeholder='Primeira Nota'
              value={nota1}
              onChangeText={(int) => setNota1(int)}
          />
  
          <TextInput
              style={styles.input}
              maxLength={4}
              keyboardType='decimal-pad'
              placeholder='Segunda Nota'
              value={nota2}
              onChangeText={(int) => setNota2(int)}
          />
        
          <TextInput
              style={styles.input}
              maxLength={4}
              keyboardType="decimal-pad"
              placeholder="Terceira Nota"
              value={nota3}
              onChangeText={(int) => setNota3(int)}
          />
  
          <TouchableOpacity
              style={styles.inputBtn}
              activeOpacity={0.7}
              onPress={gerarResultado}
          >
              <Text style={styles.inputBtnText}>Calcular Média</Text>
          </TouchableOpacity>
  
          <View style={styles.cardResult}>
              <Text style={styles.TextResult}>Total: {total.toFixed(1)}</Text>
              <Text style={styles.TextResult}>Média: {por.toFixed(1)}</Text>
          </View>
  
          {por < 5 ? (
              <Text style={styles.result}>Reprovado</Text>
          ) : por >= 5 && por < 7 ? (
              <Text style={styles.result}>Recuperação</Text>
          ) : por >= 7 ? (
              <Text style={styles.result}>Aprovado</Text>
          ) : (
              <Text style={styles.result}>Não foi possível calcular</Text>
          )}
      </View>
      );
  }
  
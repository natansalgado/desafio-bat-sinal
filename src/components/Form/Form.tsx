import React from 'react';
import { TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './styles';

interface Props {
  submit: () => void;
};

export function Form({ submit }: Props) {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Insira algumas informações
      </Text>

      <Text style={styles.label}>
        Nome
      </Text>
      <TextInput placeholder='Digite seu nome' style={styles.input} />

      <Text style={styles.label}>
        Contato
      </Text>
      <TextInput keyboardType='phone-pad' placeholder='Digite seu telefone' style={styles.input} />

      <Text style={styles.label}>
        Endereço
      </Text>
      <TextInput placeholder='Digite o endereço de onde ocorreu' multiline style={styles.input} />

      <Text style={styles.label}>
        Descrição
      </Text>
      <TextInput placeholder='Descreva os detalhes do ocorrido'
        multiline numberOfLines={4}
        style={[styles.input, styles.textArea]} />

      <TouchableOpacity onPress={submit}>
        <Text style={styles.button} >Enviar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
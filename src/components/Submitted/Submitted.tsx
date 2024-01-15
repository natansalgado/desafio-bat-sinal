import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    back: () => void;
}

export function Submitted({ back }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Bat Sinal enviado com sucesso
            </Text>

            <Text style={styles.p}>
                Aguarde em um local seguro!
            </Text>

            <TouchableOpacity onPress={back}>
                <Text style={styles.button}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
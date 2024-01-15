import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import { styles } from './styles';
import batman from '../../../assets/batman.png';

interface Props {
    activate: () => void;
};

export function Active({ activate }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={batman} />

            <TouchableOpacity onPress={activate}>
                <Text style={styles.button}>Activate bat signal</Text>
            </TouchableOpacity>
        </View>
    );
}
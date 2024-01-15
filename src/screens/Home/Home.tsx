import React, { useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { Form } from '../../components/Form/Form';
import { Active } from '../../components/Active/Active';
import { Submitted } from '../../components/Submitted/Submitted';

export function Home() {
    const [formPage, setFormPage] = useState(false);
    const [submittedPage, setSubmittedPage] = useState(false);

    const handleActive = () => {
        setFormPage(true);
    }

    const handleSubmit = () => {
        setFormPage(false);
        setSubmittedPage(true);
    }

    const handleBack = () => {
        setSubmittedPage(false);
    }

    return (
        <View style={styles.container}>
            {
                !submittedPage ?
                    !formPage ?
                        <Active activate={handleActive} />
                        :
                        <Form submit={handleSubmit} />
                    :
                    <Submitted back={handleBack} />
            }
        </View>
    );
}
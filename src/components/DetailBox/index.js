import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

/**
 * DetailBox Component
 * Displays product price, name, and weight information
 */
const DetailBox = ({ price, name, weight }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.priceText}>
                {"\u20BA"}
                {price}

            </Text>

            <Text style={styles.nameText}>
                {name}
            </Text>

            <Text style={styles.weightText}>
                {weight}
            </Text>

        </View>

    )
};

export default DetailBox;
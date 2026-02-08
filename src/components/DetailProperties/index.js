import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

/**
 * DetailProperties Component
 * Displays product details list with expandable items and chevron icons
 */
const DetailProperties = () => {
    const [details, setDetails] = useState([
        "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
        "İçindekiler", "Besin Değerleri", "Kullanım", "Ek Bilgiler"
    ]);

    const TextComponent = ({ detail, index }) => {
        // For last and first item styles
        const isLast = index === details.length - 1;
        const isFirst = index === 0;

        return (
            <View style={[styles.itemContainer, isLast && styles.itemContainerLast]}>
                <Text style={[styles.itemText, isFirst && styles.itemTextFirst]}>
                    {detail}
                </Text>
                {index != 0 && <Feather name="chevron-down" size={responsive.fontSize(20)} color={theme.colors.chevronGray} /> }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {
                details.map((item, index) => (
                    <TextComponent key={index} index={index} detail={item} />
                ))
            }
        </View>
    )
};

export default DetailProperties;
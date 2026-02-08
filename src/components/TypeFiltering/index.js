import React, { useState } from 'react';
import { Text, ScrollView, Pressable } from 'react-native';
import styles from './styles';
import theme from '../../const/design/theme';
import subCategories from '../../const/subCategories';

/**
 * TypeBox Component
 * Displays a single type filter box with active state styling
 */
const TypeBox = ({ item, active, setCategory }) => {
    return (
        <Pressable onPress={() => setCategory(item)}
             style={[styles.typeBox, active === item && styles.activeTypeBox]}>
            <Text style={[styles.typeText, item === active && {color: theme.colors.white}]}>{item}</Text>
        </Pressable>
    )
};

/**
 * TypeFiltering Component
 * Displays horizontal scrolling type filter boxes for subcategories
 */
const TypeFiltering = () => {
    const [category, setCategory] = useState(subCategories[0]);

    return (
        <ScrollView
            bounces={true}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.container}>
            
            {subCategories.map((item, index) => (
                <TypeBox key={index} item={item} active={category} setCategory={setCategory} />
            ))}

        </ScrollView>

    )
};

export default TypeFiltering;

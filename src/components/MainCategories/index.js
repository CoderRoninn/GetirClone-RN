import React, { useState } from 'react';
import { View } from 'react-native';
import categoriesGetir from '../../../assets/categoriesGetir';
import CategoryItem from '../CategoryItem.js';
import styles from './styles';

/**
 * MainCategories Component
 * Renders a grid of category items using CategoryItem components
 */
const MainCategories = () => {
    const [categories, setCategories] = useState(categoriesGetir);

    return (
        <View style={styles.listContainer}>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </View>
    );
};

export default MainCategories;

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import categories from '../../../assets/categoriesGetir';
import styles from './styles';

/**
 * CategoryBox Component
 * Displays a single category filter box with active state styling
 */
const CategoryBox = ({item, activeCategory}) => {
    return (
        <View style={[styles.categoryBox, item.name === activeCategory?.name && styles.activeCategory]}>
            <Text style={styles.categoryText}>{item.name}</Text>
        </View>
    )
};

/**
 * CategoryFiltering Component
 * Displays horizontal scrolling category filter boxes
 */
const CategoryFiltering = ({category}) => {
    return (
       <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={true} // Enable bounce effect at scroll edges (iOS)
        horizontal={true}
        style={styles.container}
       >
        {categories.map((item) => 
           <CategoryBox key={item.id} item={item} activeCategory={category} />
        )}
       </ScrollView>
    )
};

export default CategoryFiltering;
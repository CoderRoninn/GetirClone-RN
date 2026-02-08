import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import screens from '../../const/screens';
import styles from './styles';

/**
 * CategoryItem Component
 * Displays a single category with image and name
 */
const CategoryItem = ({ item }) => {
    const navigation = useNavigation();
    
    return (
        <Pressable onPress={() => navigation.navigate(screens.categoryDetails, {category: item})} style={styles.pressable}>
            <Image
                source={{ uri: item.src }}
                style={styles.image}
            />
            <Text style={styles.text}>{item.name}</Text>
        </Pressable>

    )
};

export default CategoryItem;
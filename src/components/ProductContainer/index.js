import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import ProductItem from '../ProductItem';
import productsGetir from '../../../assets/productGetir';

/**
 * ProductContainer Component
 * Displays products in a grid layout with first two items in a row and remaining items in a wrapped grid
 */
const ProductContainer = () => {
    return (
        <View>
            <View style={styles.firstRowContainer}>
                {/* Two elemems */}
                {productsGetir.slice(0, 2).map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </View>

            {/* Category Title */}
            <Text style={styles.sectionTitle}>
                Çubuk
            </Text>

            <View style={styles.productsGridContainer}>
                {/* Other elements */}
                {productsGetir.slice(2).map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </View>
        </View>

    )
};

export default ProductContainer;
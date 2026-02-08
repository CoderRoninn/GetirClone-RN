import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import CategoryFiltering from '../../components/CategoryFiltering';
import TypeFiltering from '../../components/TypeFiltering';
import ProductContainer from '../../components/ProductContainer';

/**
 * CategoryFilterScreen Component
 * Displays category and type filtering options for products
 */
const CategoryFilterScreen = ({ route }) => {
    const [category, setCategory] = useState(route.params.category);

    return (
        <ScrollView>
            <CategoryFiltering category={category}/>
            <TypeFiltering />
            <ProductContainer />


        </ScrollView>

    )
};

export default CategoryFilterScreen;

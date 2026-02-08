import React from 'react';
import { ScrollView } from 'react-native';
import HeaderMain from '../../components/HeaderMain';
import Banner from '../../components/Banner';
import MainCategories from '../../components/MainCategories';
import theme from '../../const/design/theme';

/**
 * HomeScreen Component
 * Main home screen displaying header, banner, and main categories
 */
const HomeScreen = () => {
    return (
        <ScrollView stickyHeaderIndices={[0]} style={{ backgroundColor: theme.colors.lightGray }}>
            <HeaderMain />
            <Banner />
            <MainCategories />
        </ScrollView>
    );
};

export default HomeScreen;


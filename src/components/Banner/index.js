import React, { useState } from 'react';
import { FlatList, Image } from 'react-native';
import urls from '../../const/urls';
import styles, { width } from './styles';

/**
 * Banner Component
 * Displays horizontal scrolling banner images
 */
const Banner = () => {
    const [banners, setBanners] = useState(urls.banners);

    return (
        <FlatList
            data={banners}
            renderItem={({ item }) => {
                return (
                    <Image 
                        source={{ uri: item }}
                        style={styles.bannerImage}
                    />
                );
            }}
            horizontal // Horizontal scroll
            showsHorizontalScrollIndicator={false} // Hide scroll indicator
            snapToInterval={width} // Snap to each banner width
            snapToAlignment='center' // Center align banner
            decelerationRate='fast' // Fast deceleration

        />
    )
};

export default Banner;
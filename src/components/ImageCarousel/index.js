import React, { useState, useRef } from 'react';
import { FlatList, Image, View } from 'react-native';
import styles from './styles';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

/**
 * ImageCarousel Component
 * Displays a horizontal carousel of product images with pagination indicators
 */
const ImageCarousel = ({ images }) => {
    // State to track the active index of the carousel
    const [activeIndex, setActiveIndex] = useState(0);

    // Callback to track which items are currently visible
    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });
    // Configuration: item is considered visible when at least 50% of it is shown on screen
    const viewConfigRef = useRef({ itemVisiblePercentThreshold: 50 });

    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                style={styles.flatList}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image 
                        source={{ uri: item }} 
                        style={styles.image} 
                        resizeMode="stretch"
                    />
                )}
                // Distance between each snap point 
                snapToInterval={responsive.deviceWidth * 0.5}
                // Align item to center when snapping
                snapToAlignment="center"
                // How fast scrolling slows down 
                decelerationRate="fast"
                // Tells FlatList when to consider an item visible, uses 50 percent threshold
                viewabilityConfig={viewConfigRef.current}
                // Runs when visible items change, updates activeIndex so pagination dots change color
                onViewableItemsChanged={onViewRef.current}
                
            />
            <View style={styles.paginationContainer}>
                <View style={styles.paginationDots}>
                    {images.map((image, index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.paginationDot,
                                { backgroundColor: activeIndex === index ? theme.colors.primary : theme.colors.paginationDotGray }
                            ]} 
                        />
                    ))}
                </View>
            </View>
        </View>
    )
};

export default ImageCarousel;
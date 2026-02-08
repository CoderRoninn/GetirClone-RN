import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';
import CartItem from '../../components/CartItem';
import ProductItem from '../../components/ProductItem';
import productGetir from '../../../assets/productGetir.js';
import { connect } from 'react-redux';
import styles from './styles';


const CartScreen = ({ cartItems }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.product.price;
        });
        setTotalPrice(total);
    };
    //when cartItems changes, getTotalPrice is called
    useEffect(() => {
        getTotalPrice();
    }, [cartItems]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => <CartItem product={item.product} quantity={item.quantity} />}
                />
                <Text style={styles.recommendedTitle}>Önerilen Ürünler</Text>
                <ScrollView
                    style={styles.horizontalScrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    bounces={true} // animation effect
                >
                    {productGetir.map((item, index) => (
                        <ProductItem key={index} item={item} />
                    ))}
                </ScrollView>

            </ScrollView>
            <View style={styles.bottomContainer}>
                <Pressable style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Devam</Text>
                </Pressable>

                <View style={styles.spacerView}>
                    <Text style={styles.priceText}>
                        <Text>{"\u20BA"}</Text>
                        {totalPrice.toFixed(2)}
                    </Text>

                </View>
            </View>
        </View>
    );
};

/**
 * Maps Redux state to component props
 * Extracts cartItems from Redux store and passes them as props to CartScreen
 */
const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
};

// Connect component to Redux store (read-only, no actions dispatched)
export default connect(mapStateToProps, null)(CartScreen);

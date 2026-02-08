import React from 'react';
import { Image, Pressable, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { responsive } from '../../utils/responsive';
import screens from '../../const/screens';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../../redux/actions/cartActions';
/**
 * ProductItem Component
 * Displays a single product item with image
 */
const ProductItem = ({item, addToCart}) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate(screens.productDetails, { product: item })} style={styles.pressable}>
            <Image
                style={styles.image}
                source={{ uri: item.image }}
            />
            <View style={styles.priceContainer}>
                <Text style={styles.oldPrice}>
                    <Text>{"\u20BA"}</Text> {item.price}
                </Text>
                <Text style={styles.newPrice}>
                    <Text>{"\u20BA"}</Text> {item.discountedPrice}
                </Text>
            </View>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productWeight}>{item.weight}</Text>
            
            <Pressable
            onPress={() => addToCart(item)}
             style={styles.plusButton}>
                <Entypo name="plus" size={responsive.fontSize(22)} color="#5D3EBD" />
            </Pressable>

        </Pressable>
    )
};

/**
 * Maps Redux actions to component props
 * Provides addToCart action to dispatch items to cart
 */
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart({quantity: 1, product})),

    } 
};

// Connect component to Redux store (write-only, no state reading)
export default connect(null, mapDispatchToProps)(ProductItem);
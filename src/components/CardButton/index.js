import React from "react";
import { View, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import actions from '../../redux/actions/cartActions';
import styles from './styles';

/**
 * CardButton Component
 * Displays a button to add items to the cart
 */
const CardButton = ({item, addToCart}) => {
    return (
        <Pressable 
            onPress={() => addToCart(item)}
            style={styles.container}
        >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Sepete Ekle</Text>
            </View>
        </Pressable>

    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(actions.addToCart({quantity:1, product}))
    }
};

export default connect(null, mapDispatchToProps)(CardButton);


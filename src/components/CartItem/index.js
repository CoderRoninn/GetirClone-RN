import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";
import { connect } from 'react-redux';
import actions from '../../redux/actions/cartActions';

/**
 * CartItem Component
 * Displays a cart item with product image, name, weight, price and quantity controls
 */
const CartItem = ({ product, quantity, removeFromCart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartItemContainer}>
        <View style={styles.rowContainer}>
          <Image
            style={styles.image}
            source={{ uri: product.image }}
          />
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.productName}>
                {product.name}
              </Text>
              <Text style={styles.productWeight}>
                {product.weight}
              </Text>
            </View>
            <Text style={styles.productPrice}>
              <Text>{"\u20BA"}</Text>
              {product.price}
            </Text>
          </View>
        </View>

        <View style={styles.quantityContainer}>
          <Pressable
            onPress={() => removeFromCart(product)}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>
              -
            </Text>
          </Pressable>
          <View style={styles.quantityDisplay}>
            <Text style={styles.quantityText}>
              {quantity}
            </Text>
          </View>
          <View style={styles.quantityButton}>
            <Text style={styles.plusButtonText}>
              +
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(actions.removeFromCart(product))
  }
};

export default connect(null, mapDispatchToProps)(CartItem);

import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Image, Pressable, View, Text } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import CategoryFilterScreen from '../screens/CategoryFilter';
import CartScreen from '../screens/Cart';
import theme from '../const/design/theme';
import screens from '../const/screens';
import { responsive } from '../utils/responsive';
import ProductDetails from '../screens/ProductDetails';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { useNavigationState } from '@react-navigation/native';
import { connect } from 'react-redux';
import actions from '../redux/actions/cartActions';


const Stack = createStackNavigator();
/**
 * HomeNavigator Component
 * Stack navigator for home screen and category filter screen with custom headers
 */


const HomeNavigator = ({ navigation, route, cartItems, clearCart }) => {

    // Screen where the tab bar will be hidden
    const tabHiddenRoutes = [screens.productDetails, screens.cart];
    // Total price of products in cart
    const [totalPrice, setTotalPrice] = useState(0);

    const getProductsPrice = () => {
        let total = 0;
        cartItems.forEach(cartItem => {
            total += cartItem.product.price;
        });
        setTotalPrice(total);
    };

    useEffect(() => {
        getProductsPrice();
    }, [cartItems]);

    // Get focused route name from navigation state
    const focusedRouteName = useNavigationState(state => {
        const tabRoute = state?.routes?.[state?.index]; // Get active tab route
        const stackState = tabRoute?.state; // Get stack navigator state
        const focusedRoute = stackState?.routes?.[stackState?.index]; // Get focused stack route
        return focusedRoute?.name; // Return route name
    });

    // useLayoutEffect runs BEFORE screen renders
    // Hides/shows tab bar based on current route
    useLayoutEffect(() => {
        navigation.setOptions({
            tabBarStyle: focusedRouteName && tabHiddenRoutes.includes(focusedRouteName)
                ? { display: 'none' }   // Hide tab bar
                : { display: 'flex' },  // Show tab bar
        });
    }, [navigation, focusedRouteName]);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screens.homeContent}
                component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <Image source={require('../../assets/getirlogo.png')}
                            style={{ width: responsive.number(70), height: responsive.number(30) }} />
                    ),
                }}
            />
            <Stack.Screen
                name={screens.categoryDetails}
                component={CategoryFilterScreen}
                options={({ navigation }) => ({
                    headerBackTitleVisible: false,       // Hide back button title
                    headerTintColor: theme.colors.white, // header back button color
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTitleAlign: 'center',
                    headerTitle: 'Ürünler',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: responsive.fontSize(15),
                        color: theme.colors.white,
                    },
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate(screens.cart)}
                            style={{
                                width: responsive.deviceWidth * 0.22,
                                height: responsive.number(33),
                                backgroundColor: theme.colors.white,
                                marginRight: responsive.deviceWidth * 0.03,
                                borderRadius: responsive.number(9),
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={require('../../assets/cart.png')}
                                style={{ width: responsive.number(23), height: responsive.number(23), marginLeft: responsive.number(6) }}
                            />
                            <View style={{
                                height: responsive.number(33),
                                width: responsive.number(4),
                                backgroundColor: theme.colors.white,
                            }}>

                            </View>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: responsive.number(33),
                                backgroundColor: theme.colors.lightPurpleBackground,
                                borderTopRightRadius: responsive.number(9),
                                borderBottomRightRadius: responsive.number(9),

                            }}>
                                <Text style={{
                                    color: '#5D3EBD',
                                    fontWeight: 'bold',
                                    fontSize: responsive.fontSize(12),
                                }}>
                                    <Text>{"\u20BA"}</Text>
                                    {totalPrice.toFixed(2)}
                                </Text>
                            </View>
                        </Pressable>
                    ),
                })}
            />
            <Stack.Screen
                name={screens.productDetails}
                component={ProductDetails}
                options={({ navigation }) => ({
                    headerBackTitleVisible: false,
                    headerTintColor: theme.colors.white,
                    headerTitle: "Ürün Detayı",
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTitleStyle: {
                        fontSize: responsive.fontSize(15),
                        fontWeight: 'bold',
                        color: theme.colors.white,
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} style={{ paddingLeft: responsive.number(8) }}>
                            <Ionicons name="close" size={responsive.fontSize(24)} color={theme.colors.white} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable style={{ paddingRight: responsive.number(12) }}>
                            <Foundation name="heart" size={responsive.fontSize(24)} color="#32177a" />
                        </Pressable>
                    ),
                })}
            />
            <Stack.Screen
                name={screens.cart}
                component={CartScreen}
                options={({ navigation }) => ({
                    headerTintColor: theme.colors.white,
                    headerBackTitleVisible: false,
                    headerTitle: () => (
                        <Text style={{ fontWeight: 'bold', fontSize: responsive.fontSize(15), color: theme.colors.white }}>Sepetim</Text>
                    ),
                    headerLeft: () => (
                        <Pressable
                            onPress={() => navigation.goBack()}
                            style={{ paddingLeft: responsive.number(10) }}>
                            <Ionicons name="close" size={responsive.fontSize(26)} color={theme.colors.white} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => clearCart()}

                            style={{ paddingRight: responsive.number(10) }}>
                            <Ionicons name="trash" size={responsive.fontSize(26)} color={theme.colors.white} />
                        </Pressable>
                    ),
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    }
                })}
            />
        </Stack.Navigator>
    )
};

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart())

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import CustomTabBarButton from '../components/CustomTabBarButton';
import theme from '../const/design/theme';
import screens from '../const/screens';
import { responsive } from '../utils/responsive';

const Tab = createBottomTabNavigator();

/**
 * RootNavigator Component
 * Main bottom tab navigator containing all main app screens
 */
const RootNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName={screens.home} // Initial screen to show
            screenOptions={{
                tabBarHideOnKeyboard: true, 
                tabBarShowLabel: false, // Hide tab bar labels
                tabBarActiveTintColor: theme.colors.tabBarActive, // Active tab icon color
                tabBarInactiveTintColor: theme.colors.tabBarInactive, // Inactive tab icon color
                headerShown: false, // Hide header
                tabBarStyle: {
                    height: responsive.number(80), // Tab bar height
                },
            }}
        >
            <Tab.Screen
                name={screens.home}
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={responsive.number(24)} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={screens.search}
                component={HomeNavigator}
                options={{
                    tabBarIcon: (({ color }) => (
                        <FontAwesome name="search" size={responsive.number(24)} color={color} />
                    )),
                }}
            />
            <Tab.Screen
                name={screens.list}
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />,
                }}
            />
            <Tab.Screen
                name={screens.user}
                component={HomeNavigator}
                options={{
                    tabBarIcon: (({ color }) => (
                        <Entypo name="user" size={responsive.number(24)} color={color} />
                    )),
                }}
            />
            <Tab.Screen
                name={screens.gift}
                component={HomeNavigator}
                options={{
                    tabBarIcon: (({ color }) => (
                        <MaterialCommunityIcons name="gift" size={responsive.number(24)} color={color} />
                    )),
                }}
            />
        </Tab.Navigator>
    );
}; 

export default RootNavigator;

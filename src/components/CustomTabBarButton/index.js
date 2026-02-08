import React from 'react';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import theme from '../../const/design/theme';
import { responsive } from '../../utils/responsive';
import styles from './styles';

/**
 * CustomTabBarButton Component
 * Custom button component for the center tab bar item with list icon
 */
const CustomTabBarButton = ({ children }) => {
    return (
        <Pressable style={styles.button}>
            <Entypo name="list" size={responsive.number(32)} color={theme.colors.customButtonIcon} />
        </Pressable>
    );
};

export default CustomTabBarButton;


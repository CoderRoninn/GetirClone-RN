/**
 * Responsive Utilities
 * Provides responsive scaling functions for consistent UI across devices
 */

import { Dimensions } from 'react-native';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const BaseWidth = 375;

// Scales size proportionally based on device width
const scale = (size) => (deviceWidth / BaseWidth) * size;

// Scales size with adjustable intensity (factor: 0 = no scaling, 1 = full scaling)
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

export const responsive = {
    fontSize: (size) => moderateScale(size, 1),
    number: (n) => moderateScale(n, 1),
    deviceWidth,
    deviceHeight,
};


import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    bannerImage: {
        width: responsive.deviceWidth,
        height: responsive.deviceHeight * 0.25,
        resizeMode: 'stretch'
    }
});

export default styles;
export const width = responsive.deviceWidth;


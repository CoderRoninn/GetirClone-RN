import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    pressable: {
        width: responsive.deviceWidth * 0.25,
        height: responsive.deviceWidth * 0.24,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsive.number(10),
    },
    image: {
        width: responsive.deviceWidth * 0.18,
        height: responsive.deviceWidth * 0.18,
        borderRadius: responsive.number(8),
    },
    text: {
        fontSize: responsive.fontSize(12),
        color: theme.colors.darkGray,
        fontWeight: '500',
    }
});

export default styles;


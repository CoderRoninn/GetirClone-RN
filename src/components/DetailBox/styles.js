import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: theme.colors.white
    },
    priceText: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: responsive.fontSize(20),
        marginTop: responsive.number(12),
    },
    nameText: {
        fontWeight: '600',
        fontSize: responsive.fontSize(16),
        marginTop: responsive.number(12),
    },
    weightText: {
        fontWeight: '600',
        color: theme.colors.detailBoxGray,
        marginTop: responsive.number(8),
        paddingBottom: responsive.number(18),
    }
});

export default styles;


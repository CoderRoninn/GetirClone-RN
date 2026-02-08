import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    pressable: {
        width: responsive.deviceWidth * 0.3,
        height: responsive.deviceHeight * 0.24,
        marginTop: responsive.number(12),
        marginLeft: responsive.number(12),
        marginBottom: responsive.number(6),
    },
    image: {
        width: responsive.deviceWidth * 0.28,
        height: responsive.deviceWidth * 0.28,
        borderRadius: responsive.number(12),
        borderWidth: responsive.number(0.11),
        borderColor: theme.colors.gray,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsive.number(10),
    },
    oldPrice: {
        fontSize: responsive.fontSize(11),
        color: theme.colors.productPriceGray,
        textDecorationLine: 'line-through',
    },
    newPrice: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: responsive.fontSize(12),
        marginLeft: responsive.number(4),
    },
    productName: {
        fontSize: responsive.fontSize(12),
        fontWeight: '600',
        marginTop: responsive.number(5),
    },
    productWeight: {
        color: theme.colors.productPriceGray,
        fontSize: responsive.fontSize(12),
        marginTop: responsive.number(4),
        fontWeight: '600',
    },
    plusButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsive.number(30),
        height: responsive.number(30),
        borderWidth: responsive.number(0.3),
        borderColor: theme.colors.borderLightGray,
        backgroundColor: theme.colors.white,
        position: 'absolute',
        right: responsive.number(-6),
        top: responsive.number(0),
        borderRadius: responsive.number(6),
        shadowRadius: responsive.number(3.8),
        shadowOpacity: responsive.number(0.05),
    }
});

export default styles;


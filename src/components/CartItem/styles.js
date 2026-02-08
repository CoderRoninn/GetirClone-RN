import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartItemContainer: {
        height: responsive.deviceHeight * 0.13,
        width: responsive.deviceWidth * 0.92,
        marginHorizontal: responsive.deviceWidth * 0.04,
        flex: 1,
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: responsive.number(0.4),
        borderBottomColor: theme.colors.borderLightGray
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: responsive.deviceHeight * 0.09,
        width: responsive.deviceHeight * 0.09,
        borderRadius: responsive.number(8),
        borderWidth: responsive.number(0.4),
        borderColor: theme.colors.borderLightGray
    },
    contentContainer: {
        marginLeft: responsive.number(8)
    },
    productName: {
        fontWeight: '500',
        fontSize: responsive.fontSize(13),
        maxWidth: responsive.deviceWidth * 0.44
    },
    productWeight: {
        color: theme.colors.detailBoxGray,
        fontWeight: '600',
        fontSize: responsive.fontSize(12),
        marginTop: responsive.number(3)
    },
    productPrice: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: responsive.fontSize(14),
        marginTop: responsive.number(6)
    },
    quantityContainer: {
        width: responsive.deviceWidth * 0.22,
        height: responsive.deviceHeight * 0.04,
        borderRadius: responsive.number(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: responsive.number(0.5),
        borderColor: theme.colors.borderLightGray,
        shadowOpacity: 0.4,
        shadowColor: theme.colors.gray
    },
    quantityButton: {
        flex: 1,
        alignItems: 'center'
    },
    quantityButtonText: {
        fontWeight: 'bold',
        fontSize: responsive.fontSize(16),
        color: theme.colors.primary
    },
    quantityDisplay: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        height: responsive.deviceHeight * 0.04,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        color: theme.colors.white,
        fontSize: responsive.fontSize(12),
        fontWeight: 'bold'
    },
    plusButtonText: {
        fontWeight: 'bold',
        fontSize: responsive.fontSize(14),
        color: theme.colors.primary
    }
})

export default styles;


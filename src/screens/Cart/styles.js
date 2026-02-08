import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomContainer: {
        height: responsive.deviceHeight * 0.12,
        flexDirection: 'row',
        paddingHorizontal: responsive.deviceWidth * 0.04,
        backgroundColor: theme.colors.cartBottomBackground,
        alignItems: 'center',

        //absolute and anolute bottom
        width: '100%',
        
    },
    continueButton: {
        flex: 3,
        height: responsive.deviceHeight * 0.06,
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsive.number(-10),
        borderTopLeftRadius: responsive.number(10),
        borderBottomLeftRadius: responsive.number(10),
        
    },
    spacerView: { 
        flex: 1,
        height: responsive.deviceHeight * 0.06,
        marginTop: responsive.number(-10),
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: responsive.number(10),
        borderBottomRightRadius: responsive.number(10),
    },
    continueButtonText: {
        color: theme.colors.white,
        fontWeight: 'bold',
        fontSize: responsive.fontSize(16)
    },
    priceText: {
        color: theme.colors.primary,
        fontWeight: 'bold',
        fontSize: responsive.fontSize(15)
    },
    horizontalScrollView: {
        backgroundColor: theme.colors.white
    },
    recommendedTitle: {
        marginTop: responsive.number(15),
        marginBottom: responsive.number(15),
        paddingHorizontal: responsive.number(15),
        fontWeight: 'bold',
        color: theme.colors.primary
    }
})

export default styles;


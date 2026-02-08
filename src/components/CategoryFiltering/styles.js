import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: theme.colors.categoryFilter,
        height: responsive.deviceHeight * 0.065,
    },
    categoryBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsive.number(9),
        height: '100%',
    },
    activeCategory: {
        borderBottomColor: theme.colors.customButtonIcon,
        borderBottomWidth: responsive.number(2.5),
    },
    categoryText: {
        fontSize: responsive.fontSize(14),
        color: theme.colors.white,
        fontWeight: '600',
    },
});

export default styles;


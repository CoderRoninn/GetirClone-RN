import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: responsive.number(16),
        paddingVertical: responsive.number(8),
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: responsive.number(12),
        borderBottomWidth: 0.4,
        borderBottomColor: theme.colors.borderLightGray,
    },
    itemContainerLast: {
        borderBottomWidth: 0,
    },
    itemText: {
        color: theme.colors.itemTextGray,
        fontSize: responsive.fontSize(13),
        fontWeight: '500',
    },
    itemTextFirst: {
        fontSize: responsive.fontSize(10.5),
        color: theme.colors.black,
    }
});

export default styles;


import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    firstRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
    },
    sectionTitle: {
        color: theme.colors.gray,
        fontWeight: 'bold',
        padding: responsive.number(14),
    },
    productsGridContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        flexWrap: 'wrap', // Allows items to wrap to next line when they don't fit in one row
        width: '100%',
        backgroundColor: theme.colors.white,
        paddingVertical: responsive.number(10),
    }
});

export default styles;


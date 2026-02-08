import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailsText: {
        paddingHorizontal: responsive.number(10),
        paddingVertical: responsive.number(14),
        color: theme.colors.detailsTextGray,
        fontWeight: '600',
    }
});

export default styles;


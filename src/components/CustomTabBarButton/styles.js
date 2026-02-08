import { StyleSheet } from 'react-native';
import theme from '../../const/design/theme';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    button: {
        width: responsive.number(58),
        height: responsive.number(58),
        backgroundColor: theme.colors.tabBarActive,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsive.number(33),
        marginTop: responsive.number(-8),
        borderWidth: responsive.number(2),
        borderColor: theme.colors.white,
    },
});

export default styles;


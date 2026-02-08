import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: responsive.deviceHeight * 0.11,
        backgroundColor: theme.colors.white,
        position: 'absolute',
        bottom: responsive.number(20),
        justifyContent: 'center',
    },
    button: {
        backgroundColor: theme.colors.cardButtonPurple,
        height: responsive.deviceHeight * 0.06,
        width: '90%',
        marginHorizontal: '5%',
        borderRadius: responsive.number(10),
        marginTop: responsive.number(-10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: theme.colors.white,
    },
});

export default styles;


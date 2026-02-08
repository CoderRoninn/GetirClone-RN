import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import theme from '../../const/design/theme';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: theme.colors.white,
        borderBottomColor: theme.colors.borderLightGray,
        borderBottomWidth: responsive.number(1),
        height: responsive.deviceHeight * 0.072,
        paddingVertical: responsive.deviceHeight * 0.014,
        paddingHorizontal: responsive.number(12),
    },
    typeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: responsive.number(12),
        marginRight: responsive.number(12),
        borderRadius: responsive.number(6),
        borderColor: '#f0eff7',
        borderWidth: responsive.number(1.3),
    },
    activeTypeBox: {
        backgroundColor: theme.colors.tabBarActive,
        height: responsive.deviceHeight * 0.044,
    },
    typeText: {
        fontSize: responsive.fontSize(12),
        color: theme.colors.categoryFilter,
        fontWeight: '600',
    },
});

export default styles;


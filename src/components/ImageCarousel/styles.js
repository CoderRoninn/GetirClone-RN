import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: responsive.deviceHeight * 0.25,
        paddingTop: responsive.number(25),
    },
    flatList: {
        width: responsive.deviceWidth * 0.5,
        height: responsive.deviceHeight * 0.2,
    },
    image: {
        width: responsive.deviceWidth * 0.5,
        height: responsive.deviceHeight * 0.2,
    },
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: responsive.number(30),
        height: responsive.number(12),
    },
    paginationDots: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paginationDot: {
        width: responsive.number(8),
        height: responsive.number(8),
        borderRadius: responsive.number(20),
    }
});

export default styles;


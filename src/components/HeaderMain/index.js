import React from 'react';
import { View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
import theme from '../../const/design/theme';
import { responsive } from '../../utils/responsive';
import urls from '../../const/urls';

/**
 * HeaderMain Component
 * Displays the main header with address information and delivery time
 */
const HeaderMain = () => {
    return (
        <View style={styles.headerMain}>
            
            {/* Address section container  */}
            <View style={styles.headerOne}>
                <Image style={styles.image} source={{ uri: urls.header.houseEmoji }} />
                {/* Address info container - Contains location name, address text and icon */}
                <View style={styles.headerOneView}>
                    <Text style={styles.placeText}>Ev</Text>
                    <Text style={styles.addressText}>
                        Kayapınar Blv. Peyas Mahallesi...
                    </Text>
                    <Entypo name="chevron-right" size={responsive.number(22)} color={theme.colors.primary} />
                </View>
            </View>
            
            {/* Countdown section container */}
            <View style={styles.headerTwo}>
                <Text style={styles.tvsLabel}>TVS</Text>
                <Text style={styles.timeText}>
                    13<Text style={styles.timeUnit}>dk</Text>
                </Text>
            </View>
        </View>
    );
};

export default HeaderMain;








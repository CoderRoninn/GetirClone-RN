import { StyleSheet } from "react-native";
import theme from '../../const/design/theme';
import { responsive } from '../../utils/responsive';

const styles = StyleSheet.create({
    headerMain:{
        height:responsive.deviceHeight*0.064,
        flexDirection:'row',
        backgroundColor:theme.colors.secondary,
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerOne:{
        height:responsive.deviceHeight*0.064,
        width:'81%',
        backgroundColor:theme.colors.white,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderTopRightRadius:responsive.number(25),
        borderBottomRightRadius:responsive.number(25)
    }
    ,image:{
        height: responsive.number(30), 
        width: responsive.number(30),
    },
    headerOneView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:responsive.number(8),
        paddingLeft:responsive.number(8),
        borderLeftColor:theme.colors.lightPurple,
        borderLeftWidth:responsive.number(2),
        height:responsive.deviceHeight*0.035,

    },
    headerTwo:{
        width:'20%',
        height:responsive.deviceHeight*0.065,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingRight:responsive.number(10),
    },
    placeText:{
        fontWeight:'600',
        fontSize:responsive.fontSize(16)
    },
    addressText:{
        flex:1,
        fontWeight:'500',
        fontSize:responsive.fontSize(11.5),
        color:theme.colors.gray,
        marginLeft:responsive.number(6),
        marginRight:responsive.number(3),
    },
    tvsLabel:{
        fontSize:responsive.fontSize(10),
        color:theme.colors.primary,
        fontWeight:'bold',
        textAlign:'center'
    },
    timeText:{
        fontSize:responsive.fontSize(20),
        color:theme.colors.primary,
        fontWeight:'bold',
        textAlign:'center'
    },
    timeUnit:{
        fontSize:responsive.fontSize(16),
        color:theme.colors.primary,
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default styles
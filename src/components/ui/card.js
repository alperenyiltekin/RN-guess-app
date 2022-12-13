import { StyleSheet }   from 'react-native';
import colors           from '../../utils/colors';

const Card = props => {
    return (
        <View style={ styles.card }>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent          : 'center',
        alignItems              : 'center',
        marginTop               : 36, 
        marginHorizontal        : 24,
        borderRadius            : 10,
        padding                 : 16,
        elevation               : 4,
        shadowColor             : colors.darkerBlue,
        shadowOffset: { 
            width   : 0, 
            height  : 2
        },
        shadowRadius            : 6,
        shadowOpacity           : .25,
        backgroundColor         : colors.iceBlue,
        opacity                 : .5
    },
})
export default Card;
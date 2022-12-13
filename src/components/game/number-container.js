import { 
    StyleSheet, 
    Text, 
    View 
}                       from 'react-native'
import colors           from '../../utils/colors'

const NumberContainer = (props) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.numberText }>
                { props.children }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth         : 4,
        borderColor         : colors.darkerBlue,
        padding             : 24,
        borderRadius        : 8,
        margin              : 24,
        alignItems          : 'center',
        justifyContent      : 'center'
    },
    numberText:{
        fontFamily          : 'open-sans-bold',
        color               : colors.darkerBlue,
        fontSize            : 36,
    }
})

export default NumberContainer
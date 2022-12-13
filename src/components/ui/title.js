import { StyleSheet, Text } from 'react-native'
import colors               from '../../utils/colors'

const Title = (props) => {
    return (
        <Text style={ styles.title }>
            { props.children }
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize                : 24,
        fontFamily              : 'open-sans-bold',
        color                   : colors.darkerBlue,
        textAlign               : 'center',
        borderWidth             : 2,
        borderColor             : colors.darkerBlue,
        padding                 : 12,
        borderRadius            : 6
    }
})

export default Title;
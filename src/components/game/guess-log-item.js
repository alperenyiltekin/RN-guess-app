import { View, Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';


const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={ styles.listItem }>
        <Text style={ styles.itemText }>#{roundNumber}</Text>
        <Text style={ styles.itemText }>Opponent's Guess:</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor             : colors.darkBlue,
        borderWidth             : 1,
        borderRadius            : 40,
        padding                 : 12,
        marginVertical          : 8,
        backgroundColor         : colors.mdBlue,
        flexDirection           : 'row',
        justifyContent          : 'space-between',
        width                   : '100%',
        elevation               : 4,
        shadowColor             : 'black',
        shadowOffset            : {
            width   : 0,
            height  : 0
        },
        shadowOpacity           : .25,
        shadowRadius            : 3,
    },
    itemText: {
        fontFamily              : 'open-sans'
    }
})

export default GuessLogItem
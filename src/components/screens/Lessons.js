import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Lessons extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return ( 
            <View style={styles.container} >
				<View style = {styles.titleWrapper}>
					<Text style={styles.titleText}>Lessons</Text>
				</View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold',
	},
	titleWrapper: {
		flex: 1,
		justifyContent: 'center',
	},

})
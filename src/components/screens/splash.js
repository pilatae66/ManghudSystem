/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar
} from 'react-native';

import { StackActions, NavigationActions } from "react-navigation";

export default class Splash extends Component {
	static navigationOptions = {
		header: null
	}

	componentWillMount() {
		setTimeout(() => {
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[ NavigationActions.navigate({routeName: 'Login'}) ]
			}))
		}, 3000)

	}
	render(){
		return (
			<View style = {styles.container}>
				<StatusBar 
					barStyle="light-content"
					backgroundColor= "#d35400"
				/>
				<View style = {styles.titleWrapper}>
					<Text style={styles.titleText}>Mobile Learning</Text>
				</View>
				<View>
					<Text style = {styles.subtitle}>Powered by LonerMobile</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#d35400',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		color: 'white',
		fontSize: 35,
		fontWeight: 'bold',
	},
	titleWrapper: {
		flex: 1,
		justifyContent: 'center',
	},
	subtitle: {
		color: 'white',
		fontWeight: '200',
		paddingBottom: 20,
	}
});
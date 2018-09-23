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
	StatusBar,
	AsyncStorage,
	AppState
} from 'react-native';


import { StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import { setMusic, setMusicStatus, setElements } from "../../actions";
import Sound from 'react-native-sound'

class Splash extends Component {

	static navigationOptions = {
		header: null
	}
	
	_retrieveData = async () =>{

		this.props.setElements

		try {
			let value = await AsyncStorage.getItem('isMusicPlaying');
			if (value !== null) {
				// We have data!!
				if (value == 0) {
					this.props.setMusicStatus(false)
				}
				else{
					this.props.setMusicStatus(true)
				}
			}
			else{
				console.log('no data!')
			}
		} catch (error) {
			console.log(error)
		}

		// Sound.setCategory('Playback');

		// let background_music = new Sound('background.mp3', Sound.MAIN_BUNDLE, (error) => {
		// 	if (error) {
		// 		console.log('failed to load the sound', error);
		// 		return;
		// 	}
		// 	// loaded successfully
		// 	if (this.props.isMusicPlaying == true) {
		// 		background_music.play()
	
		// 		background_music.setNumberOfLoops(-1)
		// 	}
		// 	this.props.setMusic(background_music)
		// });
	}

	// componentDidMount() {
	// 	AppState.addEventListener('change', (state) => {
	// 		if(state === 'background'){
	// 			this.props.music.stop()
	// 		}
	// 	})

	// }

	componentWillMount() {
		setTimeout(() => {
			this._retrieveData()
			this.props.navigation.dispatch(StackActions.reset({
				index:0,
				actions:[ NavigationActions.navigate({routeName: 'Drawer'}) ]
			}))
		}, 3000)

	}
	render(){
		console.log('Splash', this.props)
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

mapStateToProps = state =>{
	return {
		isMusicPlaying : state.music.isMusicPlaying,
		music : state.music.music
	}
}

export default connect(mapStateToProps, { setMusic, setMusicStatus, setElements })(Splash)
import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, AppState, TouchableOpacity, StatusBar, Image, ToastAndroid, AsyncStorage } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation'

export default class Login extends Component{
	
	static navigationOptions = {
		header: null
	}
	
	constructor(props){
		super(props)  
		this.state = {
			username: "",
			password: "",
			check: {
				username: "admin",
				password: 'admin'
			},
			isMusic: true,
			music: ''
		}
		var Sound = require('react-native-sound');
		
		Sound.setCategory('Playback');
		
		this.state.music = new Sound('background.mp3', Sound.MAIN_BUNDLE, (error) => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
			// loaded successfully
			console.log('duration in seconds: ' + this.state.music.getDuration() + 'number of channels: ' + this.state.music.getNumberOfChannels());
			if (this.state.isMusic == true) {
				this.state.music.play((success) => {
					if (success) {
						console.log('successfully finished playing');
					} else {
						console.log('playback failed due to audio decoding errors');
						// reset the player to its uninitialized state (android only)
						// this is the only option to recover after an error occured and use the player again
						this.state.music.reset();
					}
				});
				this.state.music.setNumberOfLoops(-1);
			}
		});
		
	}
	
	_retrieveData = async () =>{
		try {
			let value = await AsyncStorage.getItem('isMusic');
			if (value !== null) {
				// We have data!!
				if (value == '0') {
					this.setState({isMusic:false})
				}
				else{
					this.setState({isMusic:true})
				}
			}
			else{
				console.log('no data!')
			}
		} catch (error) {
			console.log(error)
		}
	}
	
	componentWillMount(){
		this._retrieveData()
	}
	
	componentDidMount() {
		AppState.addEventListener('change', (state) => {
			if(state === 'background'){
				this.state.music.stop()
			}
			else{
				this.state.music.play()
			}
		})
	}
	
	handlePress = () => {
		console.log(this.props)
		if(this.state.check.username === this.state.username && this.state.check.password === this.state.password){
			ToastAndroid.show('You are logged in!', ToastAndroid.SHORT);
			this.props.navigation.dispatch(StackActions.reset(
				{
					index: 0,
					actions: [
						NavigationActions.navigate({ routeName: 'Drawer'})
					]
				}))
			}
			else{
				ToastAndroid.show('Invalid Credentials!', ToastAndroid.SHORT);
			}
		}
		render() {
			return (
				<View style={styles.container}>
				<StatusBar 
				barStyle="light-content"
				/>
				<View style={styles.logoContainer}>
				<Image
				style={styles.logo}
				source={require('../../images/logo.png')}
				/>
				<Text>An app made for learning Chemistry</Text>
				</View>
				<View style={styles.formContainer}>
				<View style={styles.container2}>
				<StatusBar 
				barStyle="dark-content"
				backgroundColor= "white"
				/>
				<TextInput 
				style={styles.input}
				returnKeyType="next"
				onSubmitEditing={() => this.passwordInput.focus()}
				placeholder="Username"
				onChangeText= {(text) => {
					this.setState((previous) => {
						return {
							username: text
						}
					})
				}}
				/>
				<TextInput 
				style={styles.input}
				placeholder="Password"
				returnKeyType="go"
				secureTextEntry
				onChangeText = {(text) => {
					this.setState((previous) => {
						return {
							password: text
						}
					})
				}}
				/>
				<TouchableOpacity style={styles.buttonContainer} onPress={this.handlePress}>
				<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				</View>
				</View>
				</View>
			)
		}
	}
	
	const styles = StyleSheet.create({
		container: {
			flex : 1,
			backgroundColor: 'white',
		},
		logo: {
			height: 170,
			width: 400,
		},
		logoContainer: {
			alignItems: 'center',
			flexGrow: 1,
			justifyContent: 'center'
		},
		container2: {
			padding: 20
		},
		input: {
			height: 40,
			marginBottom: 15,
			paddingHorizontal: 10,
		},
		buttonContainer: {
			backgroundColor: '#d35400',
			paddingVertical: 10
		},
		buttonText: {
			textAlign: 'center',
			color: 'white',
			fontWeight: '700'
		}
	});
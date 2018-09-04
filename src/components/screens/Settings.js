import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, ListItem, Left, Button, Icon, Body, Right, Text, Switch } from "native-base";
import { connect } from "react-redux";
import { toggleMusic } from "../../actions";
import Sound from "react-native-sound";

class Settings extends Component {

	constructor(props){
		super(props)
		
		Sound.setCategory('Playback');
	}

	_storeData = (key, value) => {
		 AsyncStorage.setItem(key, value);
	}

	handlePress = (key) => {
			// loaded successfully
			// if (this.props.isMusicPlaying == false) {
			// 	let background_music = new Sound('background.mp3', Sound.MAIN_BUNDLE, (error) => {
			// 		if (error) {
			// 			console.log('failed to load the sound', error);
			// 			return;
			// 		}

			// 		background_music.play()
		
			// 		background_music.setNumberOfLoops(-1)
			// 		this._storeData('isMusicPlaying', '1');
			// 		this.props.toggleMusic
			// 		console.log('False ',this.props.isMusicPlaying)
				
			// 	})
			// }else{
			// 	this.props.music.stop()
			// 	this._storeData('isMusicPlaying', '0');
			// 	this.props.toggleMusic
			// 	console.log('True ',this.props.isMusicPlaying)
			// }
	}

  render() {
		console.log(this.props)
    return (
      <Container>
        <Content>
          <ListItem icon onPress={ () => { this.handlePress() } }>
            <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
            <Icon active name="musical-note" />
            </Button>
            </Left>
            <Body>
            <Text>Music</Text>
            </Body>
            <Right>
            <Switch value={this.props.isMusicPlaying}/>
            </Right>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

function mapStateToProps(state){
	return {
		isMusicPlaying: state.music.isMusicPlaying,
		music: state.music.music
	}
}

export default connect(mapStateToProps, { toggleMusic })(Settings)
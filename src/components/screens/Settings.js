import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, ListItem, Left, Button, Icon, Body, Right, Text, Switch } from "native-base";

export class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
			isMusic: false,
			music: ''
		}

		this._storeData.bind(this)
	}
	
	componentDidMount(){
		this._retrieveData()
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

	_storeData(key, value){
		 AsyncStorage.setItem(key, value);
	}

	handlePress = (key) => {
		if (this.state.isMusic === true) {
			this._storeData(key, '0');
			this.setState({isMusic:false})
		}
		else{
			this._storeData(key, '1');
			this.setState({isMusic:true})
		}
	}

  render() {
    return (
      <Container>
        <Content>
          <ListItem icon onPress={ () => { this.handlePress('isMusic') } }>
            <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
            <Icon active name="musical-note" />
            </Button>
            </Left>
            <Body>
            <Text>Music</Text>
            </Body>
            <Right>
            <Switch value={this.state.isMusic}/>
            </Right>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

export default Settings
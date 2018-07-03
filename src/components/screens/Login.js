import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, StatusBar, Image, ToastAndroid } from 'react-native'
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
                username: "pilatae66",
                password: 'Powertower23'
            }
        }
    
    this.handlePress = this.handlePress.bind(this)
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
             }),{title: 'Elements'})
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
    height: 100,
    width: 100,
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
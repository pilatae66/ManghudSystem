import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'react-native-firebase'
import { List, ListItem, Body, Thumbnail, Text, Right, Button, Container, Content, Spinner, StatusBar } from "native-base";

export class QuizList extends Component {

    constructor(props){
        super(props)
        this.state = {
            quizzes: [],
            loading: true
        }
    }

    componentDidMount(){
        firebase.database().ref('/quizzes').once('value')
        .then(snap => {
            console.log(snap.val())

            let quiz = snap.val()
            this.setState({quizzes: quiz})

            console.log(this.state.quizzes)
            this.setState({loading: false})
        })
    }

    handleClick(index) {
        let quizList = this.state.quizzes[index].quiz
        console.log(quizList)
        this.props.navigation.navigate('Quiz', { quiz:quizList })
    }

    render() {
        if(this.state.loading == true){
            return (
                <View>
                    <Spinner/>
                </View>
            )
        }
        else{
            console.log(this.props)
            const quizzes = this.state.quizzes
            return (
               <View>
                   <List style={{ backgroundColor: 'white' }}
                   dataArray={quizzes}
                   renderRow={(quiz,sectionID,index) => {
                       return (
                        <ListItem button onPress={() => this.handleClick(index)}>
                            <Text>{quiz.quizTitle}</Text>
                        </ListItem>
                       )
                   }}
                   ></List>
               </View>
            )
        }
    }
}

export default QuizList
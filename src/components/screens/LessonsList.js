import React, {
    Component
} from 'react';
import {
    View
} from 'react-native';
import firebase from 'react-native-firebase'
import { List, ListItem, Body, Thumbnail, Text, Right, Button, Container, Content, Spinner, StatusBar } from "native-base";

export default class Lessons extends Component {

    constructor(props){
        super(props)
        this.state = {
            lessons: [],
            loading: true
        }
    }

    componentDidMount(){
        firebase.database().ref('/lessons').once('value')
        .then(snap => {
            let lesson = snap.val()
            this.setState({lessons:lesson})
            this.setState({loading:false})
        })
        .catch(err => console.log(err))
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
            const lessons = this.state.lessons
            return (
               <View>
                   <List style={{ backgroundColor: 'white' }}
                   dataArray={lessons}
                   renderRow={(lesson, index) => {
                       return (
                        <ListItem>
                            <Text>{lesson.lessonTitle}</Text>
                                <Text>{lesson.lesson}</Text>
                        </ListItem>
                       )
                   }}
                   ></List>
               </View>
            )
        }
    }
}
import React, {
    Component
} from 'react';
import {
    View, StatusBar
} from 'react-native';
import firebase from 'react-native-firebase'
import { Container, Header, Left, Content, List, ListItem, Icon, Title, Body, Thumbnail, Text, Right, Button, Spinner } from "native-base";

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
                <Container>
                    <Header style={{ backgroundColor:"#d35400" }}>
                        <Left style={{ flex:1 }}>
                            <Button transparent iconLeft onPress={()=>this.props.navigation.toggleDrawer()}>
                            <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex:1, alignItems:'center' }}>
                            <Title style={{ textAlign:'center' }}>Lessons</Title>
                        </Body>
                        <Right />
                    </Header>
                    <StatusBar 
                        barStyle="light-content"
                        backgroundColor= "#d35400"
                    />
                    <Content>
                        <Spinner/>
                    </Content>
                </Container>
            )
        }
        else{
            const lessons = this.state.lessons
            return (
               <Container>
                   <Header style={{ backgroundColor:"#d35400" }}>
                        <Left style={{ flex:1 }}>
                            <Button transparent iconLeft onPress={()=>this.props.navigation.toggleDrawer()}>
                            <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex:1, alignItems:'center' }}>
                            <Title style={{ textAlign:'center' }}>Lessons</Title>
                        </Body>
                        <Right />
                    </Header>
                    <StatusBar 
                        barStyle="light-content"
                        backgroundColor= "#d35400"
                    />
                   <Content>
                    <List style={{ backgroundColor: 'white' }}
                    dataArray={lessons}
                    renderRow={(lesson, index) => {
                        return (
                            <ListItem>
                                <Body>
                                    <Text>{lesson.lesson}</Text>
                                    <Text note>{lesson.lessonTitle}</Text>
                                </Body>
                            </ListItem>
                        )
                    }}
                    ></List>
                   </Content>
               </Container>
            )
        }
    }
}
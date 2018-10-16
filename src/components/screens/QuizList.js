import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import firebase from 'react-native-firebase'
import { List, ListItem, Body, Thumbnail, Text, Right, Button, Container, Content, Spinner, Header, Left, Title, Icon} from "native-base";

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
        let quizTitle = this.state.quizzes[index].quizTitle
        console.log(quizList)
        this.props.navigation.navigate('Quiz', { quiz:quizList, quizTitle:quizTitle })
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
                            <Title style={{ textAlign:'center' }}>Quizzes</Title>
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
            console.log(this.props)
            const quizzes = this.state.quizzes
            return (
               <Container>
                    <Header style={{ backgroundColor:"#d35400" }}>
                        <Left style={{ flex:1 }}>
                            <Button transparent iconLeft onPress={()=>this.props.navigation.toggleDrawer()}>
                            <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body style={{ flex:1, alignItems:'center' }}>
                            <Title style={{ textAlign:'center' }}>Quizzes</Title>
                        </Body>
                        <Right />
                    </Header>
                    <StatusBar 
                        barStyle="light-content"
                        backgroundColor= "#d35400"
                    />
                    <Content>
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
                    </Content>
               </Container>
            )
        }
    }
}

export default QuizList
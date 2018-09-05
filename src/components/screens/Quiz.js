import React, {
    Component
} from 'react';

import { Dimensions } from "react-native";

import { Container, Content, Card, CardItem, Text, Body, Button, StyleProvider } from "native-base";
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
import { correctAnswer, wrongAnswer, nexQuestion, getScore, incrementCount } from "../../actions";
import {connect} from 'react-redux'

class Quiz extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleAnswers = (question, answer) => {
        if (this.props.quiz[question].answers[answer].isKey == true) {
            alert('Correct!')
            this.props.correctAnswer()
            this.setState({count: this.state.count + 1})
            console.log(this.props)
        }
        else{
            alert('Incorrect!')
            this.props.wrongAnswer()
        }
    }

    render() {
        let questionnaire = this.props.quiz.map((value, key) => {
            return (
                <Card key={key} style={{ height: 500, flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <CardItem header>
                        <Text>{value.question}</Text>
                    </CardItem>
                    <CardItem footer style={{ flexDirection: 'row'}}>
                        <Button style={{ marginRight: 10, flex: 1 }} rounded primary onPress={() => this.handleAnswers(key,0)}  >
                            <Text>{value.answers[0].answer}</Text>
                        </Button>
                        <Button style={{ marginRight: 10, flex: 1 }} rounded danger onPress={() => this.handleAnswers(key,1)}  >
                            <Text>{value.answers[1].answer}</Text>
                        </Button>
                        <Button style={{ flex: 1 }} rounded success onPress={() => this.handleAnswers(key,2)}  >
                            <Text>{value.answers[2].answer}</Text>
                        </Button>
                    </CardItem>
                </Card>
            )
        })

        if(questionnaire[this.state.count] == null) {
            return (
                <Card style={{ height: 500, flex: 1, flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                    <CardItem header>
                        <Text>Score</Text>
                    </CardItem>
                    <CardItem footer>
                        <Text>{this.props.score}</Text>
                    </CardItem>
                </Card>
            )
        }else{
            return ( 
                <StyleProvider style={getTheme(material)}> 
                <Container>
                    <Content>
                        {questionnaire[this.state.count]}
                    </Content>
                </Container>
                </StyleProvider>
            )
        }
        
    }
}
mapStatetoProps = state => {
    return {
        quiz: state.quiz.quiz,
        score: state.quiz.score,
        incorrectAnswerCount: state.quiz.incorrectAnswerCount
    }
}

export default connect(mapStatetoProps, { correctAnswer, wrongAnswer, nexQuestion, getScore, incrementCount })(Quiz)
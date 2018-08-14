import React, {
    Component
} from 'react';

import { View } from "react-native";

import { Container, Content, Card, CardItem, Text, Body, Button, StyleProvider } from "native-base";
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';

export default class Quiz extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return ( 
            <StyleProvider style={getTheme(material)}> 
            <Container>
            <Content style={{ marginHorizontal: 10 }}>
            <View style={{ marginBottom: 50, marginTop: 10, marginHorizontal: 10 }}>
                <Text>1.) Question 1</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <Button style={{ marginRight: 10, flex: 1 }} rounded light>
                    <Text>Answer</Text>
                </Button>
                <Button style={{ marginRight: 10, flex: 1 }} rounded light>
                    <Text>Answer</Text>
                </Button>
                <Button style={{ flex: 1 }} rounded light>
                    <Text>Answer</Text>
                </Button>
            </View>
            </Content>
          </Container>
          </StyleProvider>
        );
    }
}
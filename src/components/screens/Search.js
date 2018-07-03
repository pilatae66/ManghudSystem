import React, {
    Component
} from 'react';
import {
    StatusBar
} from 'react-native';

import { List, ListItem, Body, Thumbnail, Text, Right, Button, Container, Content, Spinner } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Table from "../../data/PeriodicTable.json"
import { contentSnippet } from "../../helpers/helpers"

export default class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: false,
            data: []
        }
    }
    
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => {
            return (
                <Ionicons 
                name="ios-home"
                size={24}
                style={{ color: tintColor }}
                >
                </Ionicons>
            )
        },
    }

    getData(){
        return new Promise(resolve => { 
            setTimeout(() => {
                let elements = Table.elements.map((element, index) => {
                    return (
                        <List style={{ backgroundColor:'white' }} >
                            <ListItem>
                            <Thumbnail square size={80} source={require('../../images/logo.png')} />
                            <Body>
                                <Text>{element.name} ({element.symbol})</Text>
                                <Text note>{contentSnippet(element.summary)}</Text>
                            </Body>
                            <Right>
                                <Button transparent info>
                                    <Text style={{ width:65 }}>View</Text>
                                </Button>
                            </Right>
                            </ListItem>
                        </List>
                    )
                })
                
            resolve(elements)
            }, 1000);
        })
    }

    async asyncCall() {
        console.log('Getting Data')
        this.setState({isLoading:true})
        let result = await this.getData()
        this.setState({isLoading:false})
        this.setState({data: result})
        console.log('Done!')
    }

    componentDidMount(){
        this.asyncCall()
    }

    render() {
        if(this.state.isLoading === true){
            return (
                <Container>
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor= "#d35400"
                />
                    <Content>
                        <Spinner />
                    </Content>
                </Container>
            )
        }else{
            return ( 
                <Container>
                    <StatusBar 
                        barStyle="light-content"
                        backgroundColor= "#d35400"
                    />
                    <Content>
                        {this.state.data    }
                    </Content>
                </Container>
            )
        }
    }
}
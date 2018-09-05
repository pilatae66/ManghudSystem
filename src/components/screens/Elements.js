import React, {
    Component
} from 'react';
import {
    StatusBar
} from 'react-native';

import { List, ListItem, Body, Thumbnail, Text, Right, Button, Container, Content, Spinner } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { contentSnippet } from "../../helpers/helpers"
import { connect } from "react-redux"
import { loadingElements, setElements, setList } from "../../actions";

class Elements extends Component {

    handlePress = (index) => {
        this.props.navigation.navigate('Show', {element:this.props.elements[index]})
        console.log(this.props.elements[index])
    }

    getData(){
        return new Promise(resolve => { 
            setTimeout(() => {
                let elements = this.props.elements.map((element, index) => {
                    return (
                        <List key={index} style={{ backgroundColor:'white' }} >
                            <ListItem>
                            <Text style={{ fontSize:26, width:50, textAlign:'center' }}>{element.symbol}</Text>
                            <Body>
                                <Text>{element.name}</Text>
                                <Text note>{contentSnippet(element.summary)}</Text>
                            </Body>
                            <Right>
                                <Button onPress={this.handlePress.bind(this, index)} transparent info>
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
        this.props.loadingElements()
        let result = await this.getData()
        this.props.setList(result)
        console.log('Done!')
    }

    componentDidMount(){
        this.asyncCall()
    }

    render() {
        console.log(this.props)
        if(this.props.isLoading === true){
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
                        {this.props.list}
                    </Content>
                </Container>
            )
        }
    }
}

mapStateToProps = state => {
    return {
        elements : state.elements.elements,
        list : state.elements.list,
        isLoading: state.elements.loading,
        fetched: state.elements.fetched
    }
}

export default connect(mapStateToProps, { loadingElements, setElements, setList })(Elements)
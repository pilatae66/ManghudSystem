import React, {
    Component
} from 'react';
import {
    StatusBar
} from 'react-native';

import { List, ListItem, Body, Thumbnail, Text, Right, Button, Container, Content, Spinner, Header, Left, Icon, Item, Input } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { contentSnippet } from "../../helpers/helpers"
import { connect } from "react-redux"
import { showElement, filterElement } from "../../actions";

class Elements extends Component {

    handlePress = (index) => {
        console.log(index);
        this.props.showElement(this.props.elements[index])
        this.props.navigation.navigate('Show')
        console.log(this.props.elements[index])
    }

    filterElements = (text) => {
        this.props.filterElement(text)
    }

    render() {
        console.log(this.props)
        return ( 
            <Container>
                <Header searchBar rounded style={{ backgroundColor:"#d35400" }}>
                    <Button style={{ width:50 }} transparent onPress={()=>this.props.navigation.toggleDrawer()}>
                        <Icon name='menu' />
                    </Button>
                    <Item rounded>
                        <Input onChangeText={this.filterElements} placeholder="Search Elements"/>
                        <Icon name="ios-search" />
                    </Item>
                </Header>
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor= "#d35400"
                />
                <Content>
                    <List style={{ backgroundColor: 'white' }}
                        dataArray={this.props.elements}
                        renderRow={(element, id, index) => {
                            return (
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
                            )
                        }}
                    ></List>
                </Content>
            </Container>
        )
    }
}

mapStateToProps = state => {
    return {
        elements : state.elements.filteredData,
        isLoading: state.elements.loading
    }
}

export default connect(mapStateToProps, { showElement, filterElement })(Elements)
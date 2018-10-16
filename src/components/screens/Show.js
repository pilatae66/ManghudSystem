import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container, Content, Header, Card, CardItem, Body, Text, Left, Right, Title, Icon, Button } from "native-base";
import { connect } from "react-redux"

class Show extends Component {

	render() {
		console.log('element', this.props)
		let element = this.props.element
		return (
			<Container>
				<Header style={{ backgroundColor:"#d35400" }}>
                    <Left style={{ flex:1 }}>
                        <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ flex:1, alignItems:'center' }}>
                        <Title style={{ textAlign:'center' }}>{element.name}</Title>
                    </Body>
                    <Right />
                </Header>
                <StatusBar 
					barStyle="light-content"
					backgroundColor= "#d35400"
				/>
				<Content style={{ marginHorizontal:5 }}>
				<Card>
					<CardItem header>
						<Text>Name: ({element.symbol}) {element.name}
						{"\n"}Phase: {element.phase}
						{"\n"}Atomic Weight: {element.atomic_mass}
						{"\n"}Boiling Point: {element.boil}
						{"\n"}Density: {element.density}</Text>
					</CardItem>
					<CardItem>
						<Body>
							<Text>
								Summary: {element.summary}
							</Text>
						</Body>
					</CardItem>
					<CardItem footer>
						<Text>Discovered by: {element.discovered_by}</Text>
					</CardItem>
         </Card>
				</Content>
			</Container>
		)
	}
}
mapStateToProps = state => {
    return {
        element : state.elements.element
    }
}

export default connect(mapStateToProps, null)(Show)
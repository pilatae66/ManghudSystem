import React, { Component } from 'react'
import { Container, Content, Header, Card, CardItem, Body, Text } from "native-base";

export class Show extends Component {

	constructor(props){
		super(props)
	}
	render() {
		let element = this.props.navigation.getParam('element', '')
		return (
			<Container>
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

export default Show
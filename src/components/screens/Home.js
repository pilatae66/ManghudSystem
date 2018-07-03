import React, {
    Component
} from 'react';
import { Image, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, Content, Spinner } from "native-base";

export default class Home extends Component {
    
    constructor(props){
        super(props)
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
    render() {
        
        return ( 
            <Container>
                <StatusBar 
					barStyle="light-content"
					backgroundColor= "#d35400"
				/>
                <Content>
                </Content>
            </Container>
        );
    }
}
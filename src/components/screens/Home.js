import React, {
    Component
} from 'react';
import { Image, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, Content, Spinner } from "native-base";
import { connect } from "react-redux";

class Home extends Component {
    
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
        console.log('Home', this.props)
        return ( 
            <Container>
                <StatusBar 
					barStyle="light-content"
					backgroundColor= "#d35400"
				/>
                <Content>
                    <Image 
                    source={require('../../images/PeriodicTable.jpg')}
                    style={{ height:200, width:null, flex:1, resizeMode:'contain', marginTop:150 }}
                    />
                </Content>
            </Container>
        );
    }
}

mapStateToProps = state => {
    return {
        isMusicPlaying: state.isMusicPlaying,
        music: state.music
    }
}

export default connect(mapStateToProps, null)(Home)
import React, {
    Component
} from 'react';
import { Image, StatusBar, ScrollView, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Container, Content, Spinner, Header, Left, Button,Body,Right,Icon,Title } from "native-base";
import ImageZoom from 'react-native-image-pan-zoom';
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
        }
    }
    render() {
        console.log('Home', this.props)
        return ( 
            <Container>
                <Header style={{ backgroundColor:"#d35400" }}>
                    <Left style={{ flex:1 }}>
                        <Button transparent iconLeft onPress={()=>this.props.navigation.toggleDrawer()}>
                        <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body style={{ flex:1, alignItems:'center' }}>
                        <Title style={{ textAlign:'center' }}>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <StatusBar 
					barStyle="light-content"
					backgroundColor= "#d35400"
				/>
                <Content>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={900}
                       imageHeight={700}>
                    <Image style={{width:900, height:600}}
                        source={require('../../images/PeriodicTable.png')}/>
                </ImageZoom>
                    {/* <ScrollView 
                        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        maximumZoomScale={5}
                        minimumZoomScale={1}
                    >
                        <Image 
                        source={require('../../images/PeriodicTable.png')}
                        />
                    </ScrollView> */}
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
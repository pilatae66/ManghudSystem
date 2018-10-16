import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// Navigators
import {
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation'

// StackNavigator screens
import Splash from '../screens/splash'

// Drawer Navigation Screens
import Home from '../screens/Home'
import Settings from "../screens/Settings";

//Tab Navigation Screens
import LessonsList from '../screens/LessonsList'
import Elements from "../screens/Elements"
import Quiz from "../screens/Quiz"
import QuizList from "../screens/QuizList"
import Show from '../screens/Show';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Stack = createStackNavigator({
    Splash: {
        screen: Splash,
    },
    Show: {
        screen: Show
    },
    Quiz: {
        screen: Quiz
    },
    Drawer: {
        screen: createDrawerNavigator({
            Home: {
                screen: Home,
                navigationOptions : {
                    drawerLabel: 'Home',
                    drawerIcon: ({ tintColor }) => (
                        <Ionicons name='ios-home' size={25} color={tintColor} />
                    ),
                }
            },
            Tab: {
                screen: createBottomTabNavigator({
                    Lessons: {
                        screen: LessonsList
                    },
                    Elements : {
                        screen: Elements
                    },
                    QuizList: {
                        screen: QuizList
                    }
                },{
                    navigationOptions : ({ navigation }) => ({
                        tabBarIcon: ({ focused, tintColor }) => {
                          const { routeName } = navigation.state;
                          let iconName;
                          if (routeName === 'Lessons') {
                            iconName = `ios-book${focused ? '' : '-outline'}`;
                          }else if (routeName === 'Elements') {
                            iconName = `ios-search${focused ? '' : '-outline'}`;
                          }else if (routeName === 'QuizList') {
                            iconName = `ios-calculator${focused ? '' : '-outline'}`;
                          }
                  
                          // You can return any component that you like here! We usually use an
                          // icon component from react-native-vector-icons
                          return <Ionicons name={iconName} size={25} color={tintColor} />;
                        }
                    }),
                    tabBarOptions:{
                        activeTintColor:'#d35400'
                    }
                }),
                navigationOptions : {
                    title: 'Lessons',
                    drawerLabel: 'Lesson',
                    drawerIcon: ({ tintColor }) => (
                        <Ionicons name='ios-book' size={25} color={tintColor} />
                    ),
                }
            }
        },{
            contentOptions:{
                activeTintColor:'#d35400'
            },
        })
    },
    
}, {
    initialRouteName: 'Splash',
    navigationOptions: ({navigation}) => ({
        header: null,
        headerStyle: {
            backgroundColor: '#d35400',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
        headerLeft: <Ionicons name='ios-menu' onPress={() => navigation.toggleDrawer()} size={25} style={{ color:'white', marginLeft:10}}/>
    }),
})
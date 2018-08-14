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
    createBottomTabNavigator
} from 'react-navigation'

// StackNavigator screens
import Splash from '../screens/splash'
import Login from '../screens/Login'

// Drawer Navigation Screens
import Home from '../screens/Home'
import Settings from "../screens/Settings";

//Tab Navigation Screens
import Lessons from '../screens/Lessons'
import Search from "../screens/Search"
import Quiz from "../screens/Quiz"
import { Show } from '../screens/Show';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

export const Stack = createStackNavigator({
    Splash: {
        screen: Splash,
    },
    Login: {
        screen: Login
    },
    Show: {
        screen: Show
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
                        screen: Lessons
                    },
                    Search : {
                        screen: Search
                    },
                    Quiz: {
                        screen: Quiz
                    }
                },{
                    navigationOptions : ({ navigation }) => ({
                        tabBarIcon: ({ focused, tintColor }) => {
                          const { routeName } = navigation.state;
                          let iconName;
                          if (routeName === 'Lessons') {
                            iconName = `ios-book${focused ? '' : '-outline'}`;
                          }else if (routeName === 'Search') {
                            iconName = `ios-search${focused ? '' : '-outline'}`;
                          }else if (routeName === 'Quiz') {
                            iconName = `ios-calculator${focused ? '' : '-outline'}`;
                          }
                  
                          // You can return any component that you like here! We usually use an
                          // icon component from react-native-vector-icons
                          return <Ionicons name={iconName} size={25} color={tintColor} />;
                        },
                      })
                }),
                navigationOptions : {
                    title: 'Lessons',
                    drawerLabel: 'Lesson',
                    drawerIcon: ({ tintColor }) => (
                        <Ionicons name='ios-book' size={25} color={tintColor} />
                    ),
                }
            },
            Settings: {
                screen: Settings,
                navigationOptions : {
                    drawerLabel: 'Settings',
                    drawerIcon: ({ tintColor }) => (
                        <Ionicons name='ios-cog' size={25} color={tintColor} />
                    ),
                }
            }
        },{
            contentOptions:{
                activeTintColor: '#d35400'
            }
        }),
        navigationOptions:{
            title: 'Mobile Chemistry'
        }
    },
    
}, {
    initialRouteName: 'Splash',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#d35400',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white'
        },
    },
})
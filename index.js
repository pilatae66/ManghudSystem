import { AppRegistry } from 'react-native'
import { Stack } from './src/components/navigator/Navigator'
import React from 'react'
import { Provider } from "react-redux"
import { createStore } from "redux";
import reducer from "./src/reducer";

const store = createStore(reducer)

const AppContainer = () => 
    <Provider store={store}>
        <Stack />
    </Provider>

AppRegistry.registerComponent('MobileLearningV2', () => AppContainer)
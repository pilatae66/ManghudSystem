import { AppRegistry } from 'react-native'
import { Stack } from './src/components/navigator/Navigator'
import React from 'react'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import reducer from "./src/reducer";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger({predicate: () => process.env.NODE_ENV === 'development',})

const store = createStore(reducer, applyMiddleware(loggerMiddleware))

const AppContainer = () => 
    <Provider store={store}>
        <Stack />
    </Provider>

AppRegistry.registerComponent('MobileLearningV2', () => AppContainer)
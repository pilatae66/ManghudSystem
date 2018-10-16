import Table from "../data/PeriodicTable.json"
import _ from 'lodash'

const initialState = {
    elements: Table.elements,
    element: {},
    filteredData: Table.elements
}

const contains = (element, query) => {
    if(element.name.includes(query)){
        return true
    }
    return false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_ELEMENTS':
            return {...state, loading: true}

        case 'SHOW_ELEMENT':
            return { ...state, element: action.payload }
        
        case 'FILTER_ELEMENT':
            if(action.payload.length === 0){
                return { ...state, filteredData: state.elements }
            }
            else{
                const data = _.filter(state.elements, element => {
                    return contains(element, action.payload)
                })
                return {...state, filteredData: data}
            }
        default:
            return state
    }
}
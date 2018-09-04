import Table from "../data/PeriodicTable.json"

const initialState = {
    elements: Table.elements,
    list: [],
    loading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHING_ELEMENTS':
            return {...state, loading: true}

        case 'SET_LIST':
            return { ...state, list: action.payload, loading: false }
    
        default:
            return state
    }
}
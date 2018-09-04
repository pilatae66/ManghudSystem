export const loadingElements = () => {
    return {
        type: 'FETCHING_ELEMENTS',
    }
}

export const setList = (list) => {
    return {
        type: 'SET_LIST',
        payload: list
    }
}
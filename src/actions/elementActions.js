export const loadingElements = () => {
    return {
        type: 'FETCHING_ELEMENTS',
    }
}

export const showElement = (element) => {
    return {
        type: 'SHOW_ELEMENT',
        payload: element
    }
}

export const filterElement = (search) => {
    return {
        type: 'FILTER_ELEMENT',
        payload: search
    }
}
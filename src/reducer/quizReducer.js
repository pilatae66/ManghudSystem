const initialState = {
    score: 0,
    count: 0,
    incorrectAnswerCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'CORRECT_ANSWER':
            return {...state, score: state.score+1}
    
        case 'INCORRECT_ANSWER':
            return {...state, incorrectAnswerCount: state.incorrectAnswerCount + 1}
    
        case 'SET_QUIZ_LIST':
            return {...state, list: state.quiz, isLoading: !state.isLoading}
            
        default:
            return state;
    }
}
import Quiz from '../data/quiz.json'

const initialState = {
    quiz: Quiz.quiz,
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
            
        default:
            return state;
    }
}
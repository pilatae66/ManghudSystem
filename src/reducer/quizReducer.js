import Quiz from '../data/quiz.json'

const initialState = {
    quiz: Quiz.quiz,
    score: 0,
    incorrectAnswerCount: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CORRECT_ANSWER':
            return {...state, score: this.state.score + 1}
    
        case 'INCORRECT_ANSWER':
            return {...state, incorrectAnswerCount: this.state.incorrectAnswerCount + 1}
    
        default:
            return state;
    }
}
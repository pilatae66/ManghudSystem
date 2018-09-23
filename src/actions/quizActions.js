
export const correctAnswer = () => {
    return {
        type: 'CORRECT_ANSWER'
    }
}

export const wrongAnswer = () => {
    return {
        type: 'INCORRECT_ANSWER'
    }
}

export const setQuizList = () => {
    return {
        type: 'SET_QUIZ_LIST'
    }
}
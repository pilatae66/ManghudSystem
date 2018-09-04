const initialState = {
	isMusicPlaying: false,
	music: ""
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_MUSIC':
		return { ...state, isMusicPlaying : !state.isMusicPlaying }
		
		case 'SET_MUSIC_STATUS':
		return { ...state, isMusicPlaying : action.payload }
		
		case 'SET_MUSIC':
		return { ...state, music : action.payload }
		
		default:
		return state
	}
}
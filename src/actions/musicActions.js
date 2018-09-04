export const setMusic = music => {
    return {
        type: 'SET_MUSIC',
        payload: music
    }
}

export const setMusicStatus = musicStatus => {
    return {
        type: 'SET_MUSIC_STATUS',
        payload: musicStatus

    }
}

export const toggleMusic = status => {
    return {
        type: 'TOGGLE_MUSIC'
    }
}
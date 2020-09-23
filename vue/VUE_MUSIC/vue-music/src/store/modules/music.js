import * as type from '../types'

const state = {
    playList: [],
    currentIndex: -1,
    playing: false,
    fullScreen: false
}

const getters = {

}

const mutations = {
    [type.SET_PLAYLIST](state, playlist) {
        state.playList = playlist
    },
    [type.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    },
    [type.SET_PLAYING](state, status) {
        state.playing = status
    },
    [type.SET_FULL_SCREEN](state, status) {
        state.fullScreen = status
    }
}

const actions = {
    selectPlaySong({ commit, state }, song) {
        let playlist = state.playList.slice()
        let currentIndex = state.currentIndex
        // 查找当前播放列表是否已有此刻需要播放的歌曲
        
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
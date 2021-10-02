import axios from 'axios';


const state = {
    discord_user: null,
};


const getters = {
    discord_user: state => state.discord_user,
    isLoggedIn: state => !!state.discord_user,
};


const actions = {
    async getUserData({commit}) {
        await axios.get('/api/v1/@me')
        .then((res) => {
            commit('setUserData', res.data);
        })
    },
    clearUserData({commit}) {
        commit('setUserData', null)
    },
    logOut({commit}) {
        commit('setUserData', null)
        commit('setGuilds', null)
    }
};


const mutations = {
    setUserData(state, data) {
        state.discord_user = data;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};

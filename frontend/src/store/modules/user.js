import axios from 'axios';


const state = {
    discord_user: null,
};


const getters = {
    discord_user: state => state.discord_user
};


const actions = {
    async getUserData({commit}) {
        await axios.get('/api/@me')
        .then((res) => {
            commit('setUserData', res.data);
        })
    },
    clearUserData({commit}) {
        commit('setUserData', null)
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

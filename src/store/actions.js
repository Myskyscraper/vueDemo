const actions = {
    asnyAdd:context =>{
        context.commit('asnyAdd');
    },
    changeNickname({commit},payload){
        commit('changeNickname',payload);
    }
};
export default actions;
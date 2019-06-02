const actions = {
    asnyAdd:context =>{
        context.commit('asnyAdd');
    },
    changeNickname({commit},payload){
        commit('changeNickname',payload);
    },
    addNum({commit,state},id){
        commit('REMBER_ANSWER',id);
        commit('ADD_ITEMNUM',1);
    }
};
export default actions;
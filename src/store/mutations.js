const mutations = {
    increment:state=>{
        state.count++;
    },
    asnyAdd:state=>{
        state.number++;
    },
    changePassword:(state,payload) =>{
        state.password = payload.password;
    },
    changeNickname:(state,payload) =>{
        state.nickname = payload.nickname;
    },
    ADD_ITEMNUM(state,num){
        state.itemNum+=num;
    },
    REMBER_ANSWER(state,id){
        state.answerid.push(id);
    }
};
export default mutations;
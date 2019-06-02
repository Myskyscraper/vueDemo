const getters ={
    message:state =>{
        return '用户名'+state.username;
    },
    msg: state =>{
        return `昵称：${state.nickname}`
    }
}
export default getters;
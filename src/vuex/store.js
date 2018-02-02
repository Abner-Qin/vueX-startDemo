import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:1
}
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

const getters = {
    count:function(state){
        return state.count +=100;
    }
}

const actions ={
    addAction(context){
        context.commit('add',10);
        setTimeout(()=>{context.commit('reduce')},3000);
		console.log('我比reduce提前执行');
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
// 模块组export中的四个都可以放到这里（大项目可能会用）
const moduleA={
    state,mutations,getters,actions
}

export default new Vuex.Store({
	//state,
	//mutations,
	//getters,
	//actions,
 	modules:{a:moduleA}
})

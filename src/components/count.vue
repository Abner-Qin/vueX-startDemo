<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}}--{{count}}</h3>
       
        <h3>{{$store.state.a.count}}</h3>
        <p>
            <button @click="$store.commit('add',10)">+</button>
            <button @click="reduce">-</button>
        </p>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
        
</template>
<script>
    import store from '@/vuex/store';
    import { mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex',
 
            }
        },
        //三种实现方式
        //这一种不用写import
        //computed:{
          //  count(){
        //return this.$store.state.count;
   // }
//},
//computed:mapState({
       // count:state=>state.count
 //}),
 //最常用的方法
// computed:{
   // ...mapState(["count"]),
    //count(){
       // return this.$store.getters.count;
    //}
    //加上import可以简写
   // ...mapGetters(["count"])
//},
//模块组写法
computed:{
    count(){
        return this.$store.state.a.count;
    }
},

  methods:{
    ...mapMutations([  
        'add','reduce'
    ]),
    ...mapActions(['addAction','reduceAction'])
},
        store
        
    }
</script>
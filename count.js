// 使用全局注册
// var count ={counter:0}
// Vue.component("counter",{
//     template:'<button>{{counter}}</button>',
//     data:function () {
//         return count
//     }
// })
// Vue.component("add-counter",{
//     template:'<button v-on:click="counter += 1">+</button>',
//     data:function () {
//         return count
//     }
// })
// Vue.component("del-counter",{
//     template:'<button v-on:click="del" >-</button>',
//     data:function () {
//         return count
//     },
//     methods:{
//         del:function () {
//             if (this.counter >= 1) {
//                 this.counter -= 1
//             }
//         }
//     }
// })
// new Vue({
//     el:"#example-2"
// })
// 使用局部注册
// 父容器
let block = {
    template: `
    <div>
        <btn name="-" @click="del"></btn>
        <label>{{num}}</label>
        <btn name="+" @click="add"></btn>
    </div>`,
    data(){
        return {
            num:0
        }
    },
    // 函数
    methods:{
        del(){
            this.num--;
        },
        add(){
            this.num++;
        }
    }
}
// 子组件
let btn = {
    template: `
    <button @click="click">{{name}}</button>`,
    props:["name"],
    methods:{
        click(){
            this.$emit("click")
        }
    }
}
Vue.component("btn", btn)
new Vue({
    el: "#reg",
    components: {
        "count-num": block
    }
})
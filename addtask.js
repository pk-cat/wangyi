let value = {counter:""};
let valueArr = {arr:[{id:"1",task:"看书"},{id:"2",task:"敲代码"},{id:"3",task:"吃饭"}],display:"none"}

Vue.component("input-block",{
    template:'<input v-model="counter" />',
    data:function () {
        return value
    }
})
Vue.component("input-btn",{
    template:'<button v-on:click="add" >添加任务</button>',
    data:function () {
        return value
    },
    methods:{
        add:() =>{
            valueArr.arr.push({
                id:valueArr.arr.length == 0 ? 1 : valueArr.arr[valueArr.arr.length - 1].id - 0 + 1 +"" ,
                task:value.counter
            })
        }
    }
})
Vue.component("task-word",{
    template:'<ul><li v-for="(item,index) in arr">{{item.task}}<button v-on:click="task"><span :style="{display:display}" >{{item.id}}</span>删除</button></li></ul>',
    data:function () {
        return valueArr
    },
    methods:{
        task:function (e) {
            let id= e.target.childNodes[0].innerHTML;
            for (let i = 0; i < valueArr.arr.length; i++) {
                if (valueArr.arr[i].id == id) {
                    valueArr.arr.splice(i,1)
                }
            }  
        }
    }
})
new Vue({
    el:"#add-task",
})
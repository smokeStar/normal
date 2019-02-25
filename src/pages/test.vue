<template>
    <div class="test">
        <div @click="$loading()">loading</div>
        <div @click="$alert('警告!!')">alert</div>
        <div @click="$toast('你好呀')">toast</div>
        <div @click="$confirm('你确定要退出么')">confirm</div>

        <div @click="register">register</div>

        <div @click="login">login</div>

        <div @click="search">search</div>

        <div class="upload" v-for="item in list">
            <img src="" :ref="'preview'+item" @click="del(item)">
            <input type="file" name="file" accept="image/png,image/gif,image/jpeg" @change="preview($event, item)">
        </div>

        <div @click="upload"> 提交</div>

        <div v-for="item in test('$1')" @click="change">{{ item }}</div>
        <div v-for="item in test('$2')">{{ item }}</div>

        <div>{{ count }}</div>

        <div @click="add">add</div>

        <div @click="dec">dec</div>
    </div>
</template>

<script>
    import { register, login, search, upload } from '../services/api.js';
    import axios from 'axios';
export default {
    data () {
        return {
            map : {
                $1 : [1,2,3],
                $2 : [4,5,6]
            },
            list : [1,2,3,4],
            param  : new FormData(),
            ws : null,
            count : 0
        }
    },
    computed : {
        // 计算属性返回闭包,可以传值
        test () {
            return function(arg){
                return this.map[arg]
            }
        }
    },
    methods : {
        change () {
            this.map.$1.push(100);
            console.log(this.map)
        },
        async login () {
            let res = await login({ email : '1787176370@qq.com', password : 'wj123123' });
            console.log(res);
        },
        async search () {
            let res = await search('无双');
            console.log(res);
        },
        async upgrade (file, item) {
            this.param.append('file' + item, file, file.name);//通过append向form对象添加数据
        },
        preview (e, item) {
            var file = e.target.files[0];
            var URL = window.URL.createObjectURL(file);
            this.$refs['preview' + item][0].src = URL;
            this.upgrade(file, item);
        },
        async upload () {
            let res = await upload(this.param);
            console.log(res);
        },
        del (item) {
            this.$refs['preview' + item][0].src = '';
            this.param.delete('file'+item);
        },
        async register () {
            let res = await register({username : '文健', email : "1787176370@qq.com", password : 'wj123123' });
            console.log(res);
        },
        dec () {
            let data = JSON.stringify({ count : this.count, type : 'dec' });
            this.g.ws.send(data);
        },
        add () {
            let data = JSON.stringify({ count : this.count, type : 'add' });
            this.g.ws.send(data);
        }
    }
}
</script>

<style scoped  lang="scss">

.test{
    width: 100%;
    height: 200px;
    div{
        border: 1px solid gray;
        border-radius: 5px;
        line-height: 50px;
        text-align: center;
        margin: 10px 10px;
    }
}

</style>

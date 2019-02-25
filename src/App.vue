<template>
  <div id="app">
    <div class="bottom">{{ count }}</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      count : 0,
      timer : null,
      maxCount : 5,
    }
  },
  computed:{
  	$page(){
  		console.log(this.$route.path);
  		return this.$route.path;
  	}
  },
  created () {
    this.connect();
  },
  methods : {
    connect () {
      this.g.ws = new WebSocket('ws://www.ccyou.xin/websocket/test');

      this.g.ws.onopen = () => {
          this.maxCount = 5;
          console.log('websocket 已经连接上');
      }

      this.g.ws.onmessage = (e) => {
          console.log('收到了数据',e.data);
          // this.count = e.data;
      }

      this.g.ws.onerror = () => {
        this.maxCount -- ;
        console.log('连接出错了');
        this.g.ws.close();
      }

      this.g.ws.onclose = () => {
        console.log('连接结束了');
        this.g.ws = null;
        if( this.maxCount < 0) return alert('请检查服务器连接');
        this.connect();
      }
    }
  }

}
</script>

<style lang="scss">
@import './style/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cell{
	text-align: left;
	padding: 0 10px;
	color: gray;
	cursor: pointer;
}
.el-table-wrapper td,  .el-table-wrapper th{
	line-height: 48px;
	font-size: 14px;
	border-bottom: 1px solid #ddd;
}
.el-table-wrapper th{
	line-height: 48px;
}
.el-table-wrapper th>div{
	font-weight: 600;
}
.el-table-body tr:hover{
	background-color: #F5F8FB;
};

.bottom{
  line-height: 50px;
  height: 50px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: white;
  width: 100%;
}


</style>

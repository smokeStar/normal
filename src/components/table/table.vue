<template>
    <div class="el-table" :class="{'border' : border  }" :style="{ width : width }">
    	<table-header :columns="columns"></table-header>
    	<table-body></table-body>
        <slot></slot>
    </div>
</template>

<script>
import TableBody from './table-body.vue';
import TableHeader from './table-header.js';
export default {
    name : 'el-table',
    components:{
        TableBody,
        TableHeader
    },
    props : {
    	list : {
    		type : Array,
    		default : []
    	},
        stripe : {
            type : Boolean,
            default : false
        },
        border : {
            type :Boolean,
            default : false
        }
    },
    data(){
    	return {
    		columns : [],
            width : 'fit-content'
    	}
    },
    methods:{
    	insertColumn(column){
    		this.columns.push(column);
    	},
    	removeColumn(column){
    		let index = this.columns.indexOf(column);
    		index > -1 && this.columns.splice(index,1);
    	}
    },
    mounted(){
        this.width = this.$parent.$el.scrollWidth;
    }
}
</script>

<style  lang="scss">
.el-table{
    position: relative;
}

.border{
    border: 1px solid #eee;
    .cell{
        border-right: 1px solid #ccc;
    }
}

.el-table{
    height: 100%;
    overflow-x : auto;
    overflow-y: auto;
}

</style>

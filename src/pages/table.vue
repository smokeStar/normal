<template>
    <div class="table">
    	<!-- <el-table :data="tableData" style="width: 100%">
    		<el-table-column type="index" width="50"></el-table-column>
	        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
	        <el-table-column prop="name" label="姓名"width="180"></el-table-column>
	        <el-table-column prop="address" label="地址" width="250"></el-table-column>
	        <el-table-column label="操作">
     			<template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			    </template>
    		</el-table-column>
    	</el-table> -->
		<!-- <child>
			<div slot="text">12312</div>
			<template slot-scope="scope" slot="test">
				{{ scope.$index }} {{ scope.row }}
			</template>
		</child> -->
		<vue-table :list="tableData" stripe border>
			<vue-table-column type="index" width="50"></vue-table-column>
	        <vue-table-column prop="date" label="日期" width="180"> </vue-table-column>
	        <vue-table-column prop="name" label="姓名"width="180"></vue-table-column>
	        <vue-table-column prop="address" label="地址" width="250"></vue-table-column>
	        <vue-table-column label="操作" width="100">
     			<template slot-scope="scope" name="test">
			        <span
			          size="mini"
			          @click="handleEdit(scope.row, scope.$index)">编辑</span>
			    </template>
    		</vue-table-column>
		</vue-table>

    </div>
</template>

<script>
// import column from '../components/table/column.vue';
import child from '../components/render/scope.vue';
import vueTableColumn from '../components/table/table-column.js';
import vueTable       from '../components/table/table.vue';
export default {
	components:{
		vueTableColumn,
		vueTable,
		child
	},
	data(){
		return {
			tableData: [{
	            date: '2016-05-02',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }, {
	            date: '2016-05-04',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1517 弄'
	          }, {
	            date: '2016-05-01',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1519 弄'
	          }, {
	            date: '2016-05-04',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1517 弄'
	          }, {
	            date: '2016-05-01',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1519 弄'
	          }, {
	            date: '2016-05-04',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1517 弄'
	          }, {
	            date: '2016-05-01',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1519 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	         }]
		}
	},
	methods:{
		handleEdit(row,index){
			console.log(index)
		}
	}
}
</script>

<style scoped  lang="scss">
.table{
	width: 500px;
	height: 350px;
	margin: 100px 100px;
}

</style>

let cloumn_seed = 1;

const renderFun = {
	default : {
		renderCell(h, row, column, $index ){

			let value = row[column.property] || '';

			if(typeof(column.formatter) === 'function'){
				value = formatter(value)
			}

			if(this.renderEnv.$scopedSlots.default){
				return (
					<div class="cell" style={{ width : column.width + 'px' }}>
						{ this.renderEnv.$scopedSlots.default({row,$index}) }
					</div>)
			}

			return (
				<div class="cell" style={{ width : column.width + 'px' }}>{ value }</div>
			)
		},
		renderHeader(h,column ){
			return column.label
		}
	},
	index : {
		renderCell(h, row, column, $index ){
			let index = $index + 1;
			return (
				<div class="cell" style={{ width : column.width + 'px' }}>{ index }</div>
			)
		},
		renderHeader(h, column){
			return column.label || '#'
		}
	}
};

export default{
	name : 'table-column',
	props : {
		label : String,
		type : {
			type : String,
			default : 'default'
		},
		prop : String,
		width : {
			type : [String, Number],
			default : 80
		},
		formatter : {
			type : Function
		},
		align : {
			type : String,
			default : 'left'
		}
	},
	data(){
		return {
			index : 0,
			column : {}
		}
	},
	computed:{
		table(){
			let parent = this.$parent;
			while(parent.$options.name !== 'el-table'){
				parent = parent.$parent;
			}
			return parent;
		}
	},
	created(){
		this.index = cloumn_seed ++ ;
		this.$options.render = h=>{ <div>this.$slots.default</div> }

		let column = {
			index : this.index,
			label : this.label,
			property : this.prop,
			align : this.align,
			width : this.width,
			formatter : this.formatter,
			renderCell : renderFun[this.type].renderCell,
			renderHeader : renderFun[this.type].renderHeader,
			renderEnv : this
		}
		this.column = column;
		this.table.insertColumn(column);
	},
	destroyed(){
		this.table.removeColumn(this.column)
	}
	
}

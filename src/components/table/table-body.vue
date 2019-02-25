
<script>
	export default{
		name : 'table-body',
		data(){
			return{
				height : '300px'
			}
		},
		props : {
			columns : {
				type : Array
			}
		},
		methods:{
			getHeight(){
				let parentHeight = this.table.$el.scrollHeight;
				this.height = parentHeight - 48 + 'px';
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
		mounted(){
			this.getHeight();
		},
		render(h){
			return (
				<table class="el-table-wrapper el-table-body"
					cellspacing="0"
	        		cellpadding="0"
	        		border="0"
	        		style={{ height : this.height}}>
					<tbody>
						{
							this._l(this.table.list,(row, $index)=>{
								return (<tr class={{ 'stripe': ($index+1)%2 == 0 && this.table.stripe }}>
									{
										this._l(this.table.columns, column=>{
											return (<td>
												{ column.renderCell(h,row,column,$index) }
											</td>)
										})
									}
								</tr>)
							})
						}
					</tbody>

				</table>
			)
		}
	}
	
</script>


<style lang="scss">
.stripe{
	background-color: #F5F8FB;
}

.el-table-body{
	display: block;
	overflow: auto;
}


</style>

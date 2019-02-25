export default {
	name : 'table-header',
	render(h){
		return (
			<table class="el-table-wrapper"
				cellspacing="0"
        		cellpadding="0"
        		border="0">

        		<thead class="el-table-header">
        			<tr>
        				{
        					this._l(this.columns,(column, index)=>{
        						return(
        							<th>
        								<div class="cell" style={{ width:column.width+'px' }}>
        									{ column.renderHeader(h,column) }
        								</div>
        							</th>)}
        						)
        				}
        			</tr>
        		</thead>
			</table>
		)
	},
	props:{
		columns : {
			type : Array,
			default:()=>[]
		}
	}
}
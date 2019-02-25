<script type="text/babel">
export default {
	data(){
		return {
			list : [1,2,3,4,5,6,7]
		}
	},
	mounted(){
		console.log(this.$slots);
		console.log(this.$scopedSlots.test);
	},
	render(){
		return (
			<div>
				<h3>我是子组件</h3>
				<div style={{ color : 'red' }}>{ this.$slots.text }</div>
				<div>{ this.$scopedSlots.test({ $index : this.list[1],row : this.list }) }</div>
			</div>
		)
	}
    
}
</script>

<style scoped  lang="scss">

</style>

<script type="text/babel">

const SmallCom = {            // 这里大写可以直接引入组件,不用再components中声明
	name : 'small-com',
	props : ["count"],
	methods : {
		click(){
			if(this.count == 6) return;
			this.$emit('change',this.count + 1);
		}
	},
	render(){
		const text = `<h${this.count}>${this.count}</h${this.count}>`
		return (
			<div domPropsInnerHTML = { text }  on-click = { this.click }></div>
		)
	}
}

export default {
	name : 'render',
	render(h){
		const { obj, change } = this;
		const demo = (<div>123</div>);
		return (
			<div>
				<div
					id = "foo"
					onClick = { (e)=>{this.test('hello')}  }
					class = { [{foo : true}, {bar : false}] }
					style = {{ color : 'red', fontSize : '18px', cursor : 'pointer', userSelect : 'none' }}
					ref = "foo">

					{/* v-if */}
					{ this.show && <div>我是true</div> || <div>我是false</div> }

					{/* 循环 */}
					{ this.arr.map((item, index)=>{return index >= 1 && <div>{item.name} : {item.age}</div> })}

					{/* 双向绑定 */}
					<input domPropsValue = {this.msg} onInput={ (e)=> this.msg = e.target.value }/>

					{/* 加载图片 */}
					<img domPropsSrc={ require("../../images/logo.png") }/>

					{ 
						this._l(this.arr, (column,index)=><li>{ index }</li>) 
					}	

				</div>
			<div>
				<SmallCom 
					count={ obj.name }
					on-change = { change }>
				</SmallCom>
				{ demo }
			</div>
			</div>
		)
	},
	methods:{
		test(msg){
			this.show = !this.show;
		},
		change(val){
			this.obj.name = val;
		}
	},
	data(){
		return{
			count : 1,
			msg : 'helloword',
			show : false,
			obj : {name : 2},
			arr : [
					{ name : 'wenjian' , age : '23' }
				,	{ name : 'wenhua'  , age : '21' }
				,	{ name : 'wencai'  , age : '22' }
				,	{ name : 'wenzhang', age : '3'  }
			]
		}
	},
	watch : {
		msg(newVal){
			console.log(newVal);
		},
		'obj.name'(newVal){
			console.log(newVal);
		}
	}
}
</script>

<style scoped  lang="scss">


</style>

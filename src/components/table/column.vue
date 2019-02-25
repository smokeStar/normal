<template>
    <div class="column">
    	{{ columnId }}
    </div>
</template>

<script>
let seed = 1;

export default {
	data(){
		return{
			columnId : null
		}
	},
    created(){
    	// this.columnId = 'column' + seed++;
    	console.log(this.columnId);
    },
    mounted(){
        // console.log('mounted',this.columnId);
    }
}
</script>

<style scoped  lang="scss">

</style>

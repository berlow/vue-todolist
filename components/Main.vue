<template>
	<div id="todoBox">
		<div class="form-group">
			<input class="form-control" type=" text" placeholder="添加任务" v-model="todoMsgInput" @keyup.enter="addTodo">
		</div>
		<div id="list" class="list-group">
			<a class="list-group-item"  href="javascript:;" v-for="todo in todoList"  v-on:click="checked($index)">
				<span class="glyphicon glyphicon-ok {{todo.status}}"></span>
				<span class="value">
					
					<template v-if="todo.status == 'check'">
						{{ todo.todoMsg }}
					</template>

					<del v-else >{{ todo.todoMsg }}</del>
					
				</span>

				<span class="glyphicon glyphicon-trash delete"  v-show="todo.status == 'checked'" v-on:click="deleteTodo($index)" ></span>
			</a>

		</div>
		
	</div>
</template>


<script>
module.exports = {
    data: function(){
    	return {
	    	todoMsgInput:"",
	    	todoList:[
	    		{
					todoMsg : "时不我待",
					status : 'check'
	    		},
	    		{
					todoMsg : "做完API测试",
					status : 'checked'
	    		},
	    		{
					todoMsg : "吃午饭",
					status : 'check'
	    		},
	    		{
					todoMsg : "睡觉",
					status : 'check'
	    		}
	    	]
    	}
    },

	methods: {
		addTodo: function (msg) {

			var todoMsg = this.todoMsgInput.trim()

			if( todoMsg == "" ){
				return false;
			}

			this.todoList.push( { todoMsg : todoMsg,status : 'check'} )

			this.todoMsgInput = ""
			
			localStorage.setItem('todoList',JSON.stringify(this.todoList))

		},
		checked:function(index){
			this.todoList[ index ].status = this.todoList[ index ].status == "check" ? 'checked' : 'check';
			
			localStorage.setItem('todoList',JSON.stringify(this.todoList))
		},
		deleteTodo:function(index){
			this.todoList.splice(index, 1)
			
			localStorage.setItem('todoList',JSON.stringify(this.todoList))
		}
	} ,

	ready:function(){
		var todoList = localStorage.getItem('todoList');

		if( todoList === null ){
			return false;
		}

		todoList = JSON.parse(todoList)

		if( todoList.length <= 0 ){
			return false;
		}
		this.todoList = todoList

		// localStorage.removeItem(key)


	}
}
</script>


<style>
	#todoBox{
		max-width: 640px;
		width:100%;
		margin: 0 auto;
		margin-top: 50px;
	}
	.delete{
		float: right;
	}
	.check{
		background-color: #ccc;
		border-radius:5px;
		padding: 3px;
		color: #ccc;
	}

	.checked{
		background-color: #d9534f;
		border-radius:5px;
		padding: 3px;
		color: #fff;
	}
	del{
		color: #999999
	}
</style>
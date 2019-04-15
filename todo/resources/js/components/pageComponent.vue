<template>
	<div class="container">
		<div class="row justify-content-center">
			<form-component v-on:onButtonClicked="updateOutput"></form-component>
			<div :style="display='block'" class="col-8" v-for="todo in todos" :key="todo.index">
				<p>{{todo.stringTodo}}</p>
				<div class="custom-control custom-radio custom-control-inline">
					<input
						@click="checkedThis()"
						type="completed"
						id="completed"
						name="completed"
						class="custom-control-input"
					>
					<label class="custom-control-label" for="completed">Completed</label>
					<button id="delete" size="lg" @click="deleteTodo()">Delete</button>
				</div>
                
			</div>
		</div>
	</div>
</template>

<script>
	import formcomponent from "./formComponent.vue";
	export default {
		name: "pageComponent",
		props: {
			checked: Boolean
		},
		data() {
			return {
				newTodo: "",
				todos: [
					// {
					//      checked: false, // by default
					//      stringTodo: "",      // by default
					//      index = 0       // by default the index
					// }
					// this is what the format looks like
				],

				completeArr: []
			};
		},
		methods: {
			checkedThis() {
				this.todos.checked = true;
				this.completeArr.push(this.todo.stringTodo);
			},
			deleteTodo(todo) {
				this.todos.splice(this.todos.indexof(todo), 1);
			},
			updateOutput(obj) {
				this.todos.push(obj);
			}
		},
		computed: {}
	};
</script>
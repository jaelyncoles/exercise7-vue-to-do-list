<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">Add New Todo</div>

					<div class="card-body">
						<div class="input-group mb-3">
							<input
								v-model="newTodo"
								type="text"
								class="form-control"
								placeholder="Enter Todo Here"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							>
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button" @click="addTo()">Add</button>
							</div>
						</div>
						<div class="custom-control custom-radio custom-control-inline">
							<input
								@click="showcFilter()"
								type="completed"
								id="completed"
								name="completed"
								class="custom-control-input"
							>
							<label class="custom-control-label" for="completed">Completed</label>
						</div>
						<div class="custom-control custom-radio custom-control-inline">
							<input
								@click="shownFilter()"
								type="radio"
								id="nCompleted"
								name="nCompleted"
								class="custom-control-input"
							>
							<label class="custom-control-label" for="nCompleted">Not yet Completed</label>
						</div>

						<div class="custom-control custom-radio custom-control-inline">
							<input @click="showaFilter()" type="radio" id="all" name="all" class="custom-control-input">
							<label class="custom-control-label" for="nCompleted">Show All</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<<script>
	export default {
		name: "formComponent",
		props: {
			todo: String,
			checked: Boolean,
		},
		data() {
			return {
                newTodo: "",
                todos: [
                    // {
                    //      checked: false, // by default
                    //      stringTodo:"",       // by default
                    //      index =         // the index
                    // }
                    // this is what the format looks like
                ],
				
			};
		},
		methods: {
			addTo() {
                console.log("in here");
                console.log(this.newTodo);
                this.todos.push(
                    //pushes a new object into the todos array
                    {   stringTodo : this.newTodo,
                        checked: false,
                        index: this.todos.length
                    }
                );
                this.$emit( ("onButtonClicked"), {
                    stringTodo : this.newTodo,
                    checked: false,
                    index: this.todos.length
                    
                    } );
                //reset "newTodo" to blank
                this.newTodo = "";
            },
            deleteTodo(todo) {
                this.todos.splice(this.todos.indexof(todo), 1);
            },
            showcFilter() {
                if (this.todo.checked == false){
                    style = "display:none";
                    // double check
                }
            },
            shownFilter() {
                if (this.todo.checked == true){
                    style = "display:none";
                }
            },
            showaFilter(){
               this.todo.style = "display:'block'";
            }
        },
            
        
		
		computed: {
			
		}
	};
</script>
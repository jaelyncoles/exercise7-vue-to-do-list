
//make an input
//make an add button 
//make the button add text to the list
//make an X button to delete the item
//make a completed button that turns the words green when pressed
//make a button that shows completed

var app = new Vue({
    el: "#text",

    data: {
        newTodo: " ",
        todos: [],
    },

    methods: {
        addTo() {
            console.log("in here");
            this.todos.push({ title: this.newTodo, checked: false, index: this.todos.length });
            this.newTodo = "";
        },
        deleteTodo(todo) {
            this.todos.splice(this.todos.indexof(todo), 1);
        }

    }
})

Vue.component('my-todo-wrapper', {
    template: `<div class="checkbox-wrapper"><div class="title">{{ todo.title }} <input type="checkbox" v-model="todo.checked" @change="check(todo)"><label for="checkbox" :class="promptText"> </label></div> <button type="button" class="btn btn-danger" v-on:click='deleteTodo'>X</button></div>`,
    data() {
        return {
            promptText: "finish"
        }
    },
    methods: {
        check(todo) {
            var finAr = [];
            var notAr = [];
            todo.checked = !todo.checked;
            if (todo.checked) {
                this.promptText = "done";
                finAr.push(todo.checked);
            } else {
                this.promptText = "finish"
                notAr.push()
            }
            console.log(notAr);
        },
        deleteTodo() {
            this.$emit("deleteTodo")

        }

    },
    props: {
        todo: Object
    }
});


  //finish delete button
  //make a finished and not finished array
  //make a button that hides finished
  //make a button that hides not finished
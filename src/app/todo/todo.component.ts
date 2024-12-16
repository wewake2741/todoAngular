import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: string[] = [];
  newTodo: string = '';

  // Method to add a new to-do item
  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push(this.newTodo);
      this.newTodo = ''; // Clear the input field
    }
  }

  // Method to delete a to-do item
  deleteTodo(index: number) {
    this.todos.splice(index, 1); // Remove the item from the array
  }

}

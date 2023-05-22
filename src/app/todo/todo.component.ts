import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [
    { task: 'Sample todo 1', completed: false },
    { task: 'Sample todo 2', completed: true },
    { task: 'Sample todo 3', completed: false }
  ];

  addTask(newTask: string) {
    if (newTask.trim() !== '') {
      const todo: Todo = {
        task: newTask,
        completed: false
      };
      this.todos.push(todo);
    }
  }

  completeTask(todo: Todo) {
    todo.completed = true;
  }
}

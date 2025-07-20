import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

export interface TodoList {
  id: number;
  task: string;
  completed: boolean;
}
@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  todoList: TodoList[] = [];

  newTask: string = "";

  addTask(event: Event): void {
    if (this.newTask.trim() !== "") {
      const newTodoItem: TodoList = {
        id: Date.now(),
        task: this.newTask,
        completed: false,
      };

      this.todoList.push(newTodoItem);
      this.newTask = "";
    }
  }

  handleComplete(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }
}

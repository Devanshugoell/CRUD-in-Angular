import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";

export interface TodoList {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  todoList: TodoList[] = [];

  newTask: string = "";
  editingIndex: number | null = null;

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

  handleEdit(index: number): void {
    this.editingIndex = index;
    this.newTask = this.todoList[index].task;
  }

  saveEdit(index: number): void {
    if (this.newTask.trim() !== "") {
      this.todoList[index].task = this.newTask;
      this.editingIndex = null;
      this.newTask = "";
    }
  }

  cancelEdit(): void {
    this.editingIndex = null;
    this.newTask = "";
  }

  handleComplete(index: number): void {
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  handleDelete(index: number): void {
    this.todoList = this.todoList.filter((_, i) => i !== index);
  }
}

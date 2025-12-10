import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Tasks } from '../tasks'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = {};

  constructor(
    private tasksService: Tasks,
  ){}

  ngOnInit(): void {
    this.tasksService.index().subscribe((tasks ) => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.newTask.title === undefined) {
      return;
    }

    this.newTask.completed = false;
    this.newTask.archived = false;

    this.tasks.unshift(this.newTask);

    this.tasksService.post(this.newTask).subscribe((task) => {
      this.newTask = {};
      this.ngOnInit();
    });
  }

  handleChange(task: Task) {
    this.tasksService.put(task).subscribe({
      error: err => {
        alert(err);
        this.ngOnInit();
      }
    })
  }

  archiveCompleted() {
    const observables: Observable<any>[] = [];
    for (const task of this.tasks){
      if (!task.completed){
        continue;
      }
      task.archived = true;
      observables.push(this.tasksService.put(task));
    }
    forkJoin(observables).subscribe(()=> {
      this.ngOnInit();
    });
  }

}

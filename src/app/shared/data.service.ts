import {Injectable} from '@angular/core'
import { Task } from './task.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task[] = [
    new Task('Titulo', 'Texto interior'),
    new Task('Titulo', 'Texto interior')
  ]

  constructor() {}

  getAllTaks() {
    return this.tasks;
  }

  addTask(task:Task) {
    this.tasks.push(task)
  }

  updateTask(index: number, updatedTask:Task) {
    this.tasks[index] = updatedTask
  }

  deleteTask(index:number) {
    this.tasks.splice(index, 1)
  }
}

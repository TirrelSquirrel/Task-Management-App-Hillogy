import { Component } from '@angular/core';
import { Task } from '../shared/task.model';
import { DataService } from '../shared/data.service';
import { MatDialog} from '@angular/material/dialog'
import { NgForm } from '@angular/forms';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent {
  tasks: Task[] =[];

  constructor(private dataService: DataService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.tasks = this.dataService.getAllTaks();
  }

  onFormSubmit(form:NgForm) {
    if(form.valid) {
      this.dataService.addTask(new Task(form.value.title, form.value.text));
      form.reset;
    }
  }

  toggleCompleted(task: Task) {
    task.completed = !task.completed
  }

  editTask(task: Task) {
    const index = this.tasks.indexOf(task);

    let dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width:'700px',
      data: task
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTask(index, result)
      }
    })
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);

    this.dataService.deleteTask(index)
  }
}

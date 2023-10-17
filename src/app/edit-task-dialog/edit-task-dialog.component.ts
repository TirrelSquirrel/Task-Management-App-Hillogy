import { Component, Inject } from '@angular/core';
import {NgForm} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent {
  constructor(
    public dialogRef:MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task:Task) {}

    onFormSubmit(form:NgForm) {
      if(form.valid) {
        // ! SI HAY FALLO AL EDITAR CHEKAR ESTO
        const updatedTask = {
          ...this.task,
          ...form.value
        }
        this.dialogRef.close(updatedTask)
      }
    }

    close() {
      this.dialogRef.close()
    }
}

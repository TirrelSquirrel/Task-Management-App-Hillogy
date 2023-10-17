import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task = new Task('', '')

  @Output() taskClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  onTaskClicked() {
    this.taskClicked.emit()
  }

  onEditClicked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
  console.log('delete clicked');

    this.deleteClicked.emit()
  }
}

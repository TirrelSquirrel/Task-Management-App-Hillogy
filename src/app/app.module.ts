import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { DataService } from './shared/data.service';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskComponent,
    EditTaskDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

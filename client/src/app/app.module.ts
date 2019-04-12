import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './todo//to-do-item/to-do-item.component';
import { ToDoListComponent } from './todo/to-do-list/to-do-list.component';
import { TaskService } from './todo/shared/task.service';
import { LoginComponent } from './user-managment/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './core/material/material.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/to-do.reducer';
import { TodoEffects } from './store/to-do.effects';
import { NewTaskComponent } from './todo/new-task/new-task.component';
import {NonCompletedPipe} from './core/pipes';
import { ToDoTasksComponent } from './todo/to-do-tasks/to-do-tasks.component';
import { EditableComponent } from './todo/shared/editable/editable.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    ToDoListComponent,
    LoginComponent,
    NewTaskComponent,
    NonCompletedPipe,
    ToDoTasksComponent,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    StoreModule.forRoot({user: todoReducer}),
    EffectsModule.forRoot([
      TodoEffects
    ]),
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

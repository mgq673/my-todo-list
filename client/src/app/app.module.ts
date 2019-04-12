import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { ToDoItemComponent } from './todo//to-do-item/to-do-item.component';
import { ToDoListComponent } from './todo/to-do-list/to-do-list.component';
import { LoginComponent } from './user-managment/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material/material.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store/to-do.reducer';
import { TodoEffects } from './store/to-do.effects';
import { NewTaskComponent } from './todo/new-task/new-task.component';
import { NonCompletedPipe } from './shared/pipes';
import { ToDoTasksComponent } from './todo/to-do-tasks/to-do-tasks.component';
import { EditableComponent } from './todo/shared/editable/editable.component';
import { httpInterceptorProviders } from './shared/interceptors/index';
import { ErrorComponent } from './error-handler/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemComponent,
    ToDoListComponent,
    LoginComponent,
    NewTaskComponent,
    NonCompletedPipe,
    ToDoTasksComponent,
    EditableComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    StoreModule.forRoot({ user: todoReducer }),
    EffectsModule.forRoot([
      TodoEffects
    ]),
    FlexLayoutModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

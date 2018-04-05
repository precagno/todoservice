import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TodoServiceComponent } from './todo-service/todo-service.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { ConfigService } from './config/config.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoServiceComponent,
    TodoListComponent,
    TodoHeaderComponent,
    TodoAddComponent,
    TodoFooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Todo, TODOS } from '../clases/Todo';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.loadGetData();
  }

  loadGetData() {
    this.configService.getConfig().subscribe(data => {
      this.todos = data;
    }, error => {
      console.log('Còdigo de error: ' + error.status + ' , mensaje: ' + error.message);
    });
  }

}

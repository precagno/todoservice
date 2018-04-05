import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {

  todo_title: string;
  user_id: number;
  responseID: number;
  completed: boolean;
  postSuccess: boolean;


  constructor(private configService: ConfigService) {
    this.completed = true;
    this.postSuccess = false;
  }

  ngOnInit() {
  }

  submitForm(event) {
    event.stopPropagation();

    this.configService.postConfig(this.todo_title, this.user_id, this.completed)
    .subscribe(data => {
      console.log(data);
      this.showSuccessBanner();
    }, error => {
      console.log(error);
    });

  }

  showSuccessBanner() {
    this.postSuccess = true;
  }

  hideSuccessBanner() {
    this.postSuccess = false;
  }
}

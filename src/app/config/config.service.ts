import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../clases/Todo';

@Injectable()
export class ConfigService {

  private url_todos = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getConfig(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url_todos);
  }

  postConfig(title: string , userID: number , completed: boolean): Observable<any> {
    return this.http.post(this.url_todos, {
      'title': title,
      'userId': userID,
      'completed': completed
    });
  }

}

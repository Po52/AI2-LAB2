import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from './task';

@Injectable({
  providedIn: 'root',
})
export class Tasks {
  private apiUrl = 'http://localhost:50264/todos'

  constructor(
    private http: HttpClient,
  ) {}


  public index(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}?archived=${archived}`);
  }

  public post(task: Task, ): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  public put(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  public delete(task: Task): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${task.id}`);
  }
}

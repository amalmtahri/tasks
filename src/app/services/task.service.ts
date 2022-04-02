import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 urlApi:string = "http://localhost:3000/tasks";
  constructor(private http: HttpClient) { }


  getTasks()
  {
    return this.http.get<Task[]>(this.urlApi);
  }
  delete(id: any) {
    return this.http.delete(`${this.urlApi}/${id}`)
  }
  persist(task: Task) {
    return this.http.post<Task>(this.urlApi, task);
  }
}

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
}

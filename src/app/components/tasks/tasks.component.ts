import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks : Task[] = [];
  resultTasks: Task[] = [];


  constructor(private taskServices : TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }


  getTasks()
  {
    this.taskServices.getTasks().subscribe(tasks =>  this.tasks = tasks)
  }
}

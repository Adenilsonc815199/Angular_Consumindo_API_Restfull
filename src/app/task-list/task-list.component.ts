import { Component } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  Task: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadTasks();
  }
  loadTasks() {
    return this.restApi.getTasks().subscribe((data: {}) => {
      this.Task = data;
    });
  }
  deleteTask(id: any) {
    if (window.confirm('Você deseja deletar a tarefa?')) {
      this.restApi.deleteTask(id).subscribe((data) => {
        this.loadTasks();
      });
    }
  }
}

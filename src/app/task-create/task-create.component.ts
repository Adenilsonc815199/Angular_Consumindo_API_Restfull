import { Component, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent {
  @Input() taskDetails = { titulo: '', descricao: '', prioridade: 0 };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addTask(dataTask: any) {
    this.restApi.createTask(this.taskDetails).subscribe((data: {}) => {
      this.router.navigate(['/task-list']);
    });
  }
}

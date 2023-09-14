import { Component } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {

  id = this.actRoute.snapshot.params['id'];
  taskData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }
  ngOnInit() {
    this.restApi.getTask(this.id).subscribe((data: {}) => {
      this.taskData = data;
    })
  }
  updateTask() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateTask(this.id, this.taskData).subscribe(data => {
        this.router.navigate(['/task-list'])
      })
    }
  }
}

import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnrolledTaskDetailsPayload} from '../../../../backend-api/enrolled-course-endpoints-api/payloads/enrolled-task-details-payload';
import {ApiHttpService} from '../../../../backend-api/api-http.service';
import {EnrolledCourseEndpointsApiService} from '../../../../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';
import {SphereEngineComponent} from '../../../../sphere-engine/sphere-engine.component';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  enrolledTaskDetails: EnrolledTaskDetailsPayload;
  courseUrlSlug: string;
  taskUrlSlug: string;
  solutionAccepted: boolean;
  constructor(
    private apiHttpService: ApiHttpService,
    private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.solutionAccepted = false;
    this.fetchData();
  }
  fetchData(): void {
    this.courseUrlSlug = this.route.snapshot.paramMap.get('slug');
    this.taskUrlSlug = this.route.snapshot.paramMap.get('task_slug');
    this.apiHttpService.get<EnrolledTaskDetailsPayload>(this.enrolledCourseEndpointsApiService.getCourseTaskDetails(this.courseUrlSlug, this.taskUrlSlug))
      .subscribe((data) => {
        console.log(data);
        this.enrolledTaskDetails = data;
      });
  }
  handleSolutionAccepted(value: boolean): void {
    console.log('recevied ', value);
    this.solutionAccepted = value;
    console.log(this.solutionAccepted);
    this.changeDetectorRef.detectChanges();
  }
  onGoToTaskButtonClicked(): void {
    console.log(this.courseUrlSlug);
    this.router.navigateByUrl(`/course/${ this.courseUrlSlug }/panel`);
    // this.router.navigate(['/course/', this.courseUrlSlug, `/panel`]);
  }
}

import {Component, OnInit} from '@angular/core';
import {ApiHttpService} from '../../../../backend-api/api-http.service';
import {EnrolledCourseEndpointsApiService} from '../../../../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EnrolledLessonDetailsPayload} from '../../../../backend-api/enrolled-course-endpoints-api/payloads/enrolled-lesson-details-payload';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent implements OnInit {
  enrolledLessonDetails: EnrolledLessonDetailsPayload;
  courseUrlSlug: string;
  lessonUrlSlug: string;
  safeHtmlContent: string;
  currentPage: number;
  totalPages: number;
  fileReader: FileReader;
  constructor(
    private apiHttpService: ApiHttpService,
    private httpClient: HttpClient,
    private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.fileReader = new FileReader();
    this.fileReader.onload = (e) => {
      this.safeHtmlContent = this.fileReader.result.toString();
      console.log(this.safeHtmlContent);
    };
  }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.courseUrlSlug = this.route.snapshot.paramMap.get('slug');
    this.lessonUrlSlug = this.route.snapshot.paramMap.get('lesson_slug');
    this.apiHttpService.get<EnrolledLessonDetailsPayload>(
      this.enrolledCourseEndpointsApiService.getCourseLessonDetails(this.courseUrlSlug, this.lessonUrlSlug))
      .subscribe((data) => {
        console.log(data);
        this.enrolledLessonDetails = data;
        this.setup();
      });
  }
  setup(): void {
    this.totalPages = this.enrolledLessonDetails.lessonFiles.length;
    this.currentPage = 1;
    console.log(this.enrolledLessonDetails.lessonFiles[this.currentPage - 1].fileUrl);
    this.readFile(this.enrolledLessonDetails.lessonFiles[this.currentPage - 1].fileUrl);
  }
  moveToPreviousPage(): void {
    this.currentPage--;
    this.readFile(this.enrolledLessonDetails.lessonFiles[this.currentPage - 1].fileUrl);
  }
  moveToNextPage(): void {
    this.currentPage++;
    this.readFile(this.enrolledLessonDetails.lessonFiles[this.currentPage - 1].fileUrl);
  }
  readFile(fileUrl: string): void{
    this.httpClient.get(fileUrl, {responseType: 'text'}).subscribe((data) => {
      this.safeHtmlContent = data;
    });
  }
}

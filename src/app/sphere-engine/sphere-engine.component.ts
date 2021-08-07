import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {SeUtilFunctions} from './utils/se-util-functions';
import {SeWidget} from './utils/se-widget';
import {EnrolledTaskDetailsPayload} from '../backend-api/enrolled-course-endpoints-api/payloads/enrolled-task-details-payload';
import {CheckStatusPayload} from '../shared/sphere-engine/check-status-payload';
import {FlashMessagesService} from 'flash-messages-angular';
import {checkStatusMap} from '../shared/sphere-engine/check-status-map';
import {EnrolledCourseEndpointsApiService} from '../backend-api/enrolled-course-endpoints-api/enrolled-course-endpoints-api.service';
import {ApiHttpService} from '../backend-api/api-http.service';


@Component({
  selector: 'app-sphere-engine',
  templateUrl: './sphere-engine.component.html',
  styleUrls: ['./sphere-engine.component.css']
})
export class SphereEngineComponent implements OnDestroy, AfterViewInit {
  private enrolledTaskDetailsPayload: EnrolledTaskDetailsPayload = null;
  @Output() private solutionAccepted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public set enrolledTaskDetails(val: EnrolledTaskDetailsPayload) {
    this.enrolledTaskDetailsPayload = val;
    if (val != null){
      setTimeout(() => {
        this.loadWidget();
      }, 500);
    }
  }
  dataWidget: string;
  dataId: string;
  seWidget: SeWidget;
  loaded: boolean;

  constructor(
    private flashMessageService: FlashMessagesService,
    private enrolledCourseEndpointsApiService: EnrolledCourseEndpointsApiService,
    private apiHttpService: ApiHttpService,
  ) {
    this.dataId = '';
    this.dataWidget = '1';
  }
  ngOnDestroy(): void {
    this.seWidget?.unsubscribe('beforeSendSubmission', this.beforeSendSubmissionCallback);
    this.seWidget?.unsubscribe('afterSendSubmission', this.afterSendSubmissionCallback);
    this.seWidget?.unsubscribe('checkStatus', this.checkSubmissionStatus);
    this.seWidget?.iframe.remove();
    SeUtilFunctions.dropSeWidget(this.dataId);
  }
  beforeSendSubmissionCallback(data: any): boolean {
    console.log('before send submission callback');
    console.log(data);
    return true;
  }
  afterSendSubmissionCallback(data: any, flashMessageService: FlashMessagesService): void {
    console.log('after send submission callback');
    flashMessageService.show('Rozwiązanie wysłane.', {cssClass: 'alert-warning', timeout: 2000});
    console.log(data);
  }
  checkSubmissionStatus(data: CheckStatusPayload, flashMessageService: FlashMessagesService): void {
    console.log('check submission callback');

    const text = checkStatusMap[data.statusNumber];
    let selectedCssClass = '';
    switch (data.statusNumber) {
      case 14:
        selectedCssClass = 'alert-danger';
        break;
      case 15:
        this.completeTask();
        this.solutionAccepted.emit(true);
        selectedCssClass = 'alert-success';
        break;
      default:
        selectedCssClass = 'alert-warning';
    }
    flashMessageService.show(text, {cssClass: selectedCssClass, timeout: 2000});
    console.log(data.statusDescription);
  }

  loadWidget(): void {
    console.log('loadWidget()', this.enrolledTaskDetailsPayload);
    this.dataWidget = this.enrolledTaskDetailsPayload.seid;
    this.dataId = '1';
    console.log('loadWidget()', this.dataWidget);

    setTimeout(() => {
      console.log('hello');
      try {
        this.seWidget = SeUtilFunctions.getSeWidget(this.dataId);
        this.loaded = true;
      } catch (e) {
        console.log('caught', e);
      }
      if (this.seWidget.isPresent()) {
        console.log('sewidget', this.seWidget);
        this.seWidget.subscribe('beforeSendSubmission', this.beforeSendSubmissionCallback);
        this.seWidget.subscribe('afterSendSubmission', (data) => {
          this.afterSendSubmissionCallback(data, this.flashMessageService);
        });
        this.seWidget.subscribe('checkStatus', (data: CheckStatusPayload) => {
          this.checkSubmissionStatus(data, this.flashMessageService);
        });
      }
    }, 1500);
  }

  completeTask(): void {
    const courseUrlSlug = this.enrolledTaskDetailsPayload.courseUrlSlug;
    const taskUrlSlug = this.enrolledTaskDetailsPayload.taskUrlSlug;
    this.apiHttpService.put(this.enrolledCourseEndpointsApiService.completeTask(courseUrlSlug, taskUrlSlug), null)
      .subscribe((data) => {
        console.log('task complete put request', data);
      });
  }

  ngAfterViewInit(): void {
    console.log("after-view-init", this.enrolledTaskDetailsPayload);
  }

}

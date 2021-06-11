import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {SeUtilFunctions} from './utils/se-util-functions';
import {SeWidget} from './utils/se-widget';


@Component({
  selector: 'app-sphere-engine',
  templateUrl: './sphere-engine.component.html',
  styleUrls: ['./sphere-engine.component.css']
})
export class SphereEngineComponent implements OnDestroy, AfterViewInit {
  dataWidget: string;
  dataId: string;
  constructor() {
    this.dataId = 'test-id';
    this.dataWidget = 'tD2Ln2MoPz';
  }
  get seObj(): SeWidget {
    return SeUtilFunctions.getSeWidget(this.dataId);
  }
  ngAfterViewInit(): void {
    SeUtilFunctions.getSeWidget(this.dataId);
    this.seObj.subscribe('beforeSendSubmission', this.beforeSendSubmissionCallback);
    this.seObj.subscribe('afterSendSubmission', this.afterSendSubmissionCallback);
    this.seObj.subscribe('checkStatus', this.checkSubmissionStatus);
  }
  ngOnDestroy(): void {
    SeUtilFunctions.dropSeWidget(this.dataId);
  }
  beforeSendSubmissionCallback(data: any): boolean {
    console.log('before send submission callback');
    console.log(data);
    return true;
  }
  afterSendSubmissionCallback(data: any): void {
    console.log('after send submission callback');
    console.log(data);
  }
  checkSubmissionStatus(data: any): void {
    console.log('check submission callback');
    console.log(data);
  }
  // ngOnInit(): void {
  //   const se = window["SE"];
  //   console.log(se);
  // }
  // ngOnDestroy(): void {
  //   console.log('ondestroy', this.dataId);
  //   drop_SE_widget(this.dataId);
  // }
  // ngAfterViewInit(): void {
  //   this.loadWidget();
  // }
  // loadWidget(): void {
  //   console.log('load', this.dataId);
  //   this.seObj = load_SE_widget(this.dataId);
  //   console.log(this.seObj);
  // }
}

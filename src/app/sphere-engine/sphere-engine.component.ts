import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

// tslint:disable-next-line:typedef
declare function drop_SE_widget(widgetId: any);
// tslint:disable-next-line:typedef
declare function load_SE_widget(widgetId: any);

@Component({
  selector: 'app-sphere-engine',
  templateUrl: './sphere-engine.component.html',
  styleUrls: ['./sphere-engine.component.css']
})
export class SphereEngineComponent implements OnInit, OnDestroy, AfterViewInit {
  dataWidget: string;
  dataId: string;
  seObj: any;
  constructor() {
    this.dataId = 'test-id';
    this.dataWidget = 'tD2Ln2MoPz';
    this.seObj = null;
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('ondestroy', this.dataId);
    drop_SE_widget(this.dataId);
  }
  ngAfterViewInit(): void {
    this.loadWidget();
  }

  loadWidget(): void {
    console.log('load', this.dataId);
    this.seObj = load_SE_widget(this.dataId);
    console.log(this.seObj);
  }

}

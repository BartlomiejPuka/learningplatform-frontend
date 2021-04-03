import {Component, OnDestroy, OnInit} from '@angular/core';

// tslint:disable-next-line:typedef
declare function drop_SE_widget(widgetId: any);
// tslint:disable-next-line:typedef
declare function load_SE_widget(widgetId: any);

@Component({
  selector: 'app-sphere-engine',
  templateUrl: './sphere-engine.component.html',
  styleUrls: ['./sphere-engine.component.css']
})
export class SphereEngineComponent implements OnInit, OnDestroy {
  dataId: string;
  constructor() {
    this.dataId = 'test-id';
  }

  ngOnInit(): void {
    console.log('oninit', this.dataId);
    load_SE_widget(this.dataId);
  }

  ngOnDestroy(): void {
    console.log('ondestroy', this.dataId);
    drop_SE_widget(this.dataId);
  }

}

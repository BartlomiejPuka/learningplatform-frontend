import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SphereEngineComponent } from './sphere-engine.component';

describe('SphereEngineComponent', () => {
  let component: SphereEngineComponent;
  let fixture: ComponentFixture<SphereEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SphereEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SphereEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

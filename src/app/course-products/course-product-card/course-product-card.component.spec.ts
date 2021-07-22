import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProductCardComponent } from './course-product-card.component';

describe('CourseProductCardComponent', () => {
  let component: CourseProductCardComponent;
  let fixture: ComponentFixture<CourseProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

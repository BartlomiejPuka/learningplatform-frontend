import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDropdownComponent } from './courses-dropdown.component';

describe('CoursesDropdownComponent', () => {
  let component: CoursesDropdownComponent;
  let fixture: ComponentFixture<CoursesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

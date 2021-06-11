import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSearchBarComponent } from './courses-search-bar.component';

describe('CoursesSearchBarComponent', () => {
  let component: CoursesSearchBarComponent;
  let fixture: ComponentFixture<CoursesSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

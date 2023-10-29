import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentsMasterComponent } from './course-contents-master.component';

describe('CourseContentsMasterComponent', () => {
  let component: CourseContentsMasterComponent;
  let fixture: ComponentFixture<CourseContentsMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseContentsMasterComponent]
    });
    fixture = TestBed.createComponent(CourseContentsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMasterComponent } from './course-master.component';

describe('CourseMasterComponent', () => {
  let component: CourseMasterComponent;
  let fixture: ComponentFixture<CourseMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMasterComponent]
    });
    fixture = TestBed.createComponent(CourseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

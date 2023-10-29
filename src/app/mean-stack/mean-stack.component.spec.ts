import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanStackComponent } from './mean-stack.component';

describe('MeanStackComponent', () => {
  let component: MeanStackComponent;
  let fixture: ComponentFixture<MeanStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeanStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeanStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

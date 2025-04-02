import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeToStartComponent } from './time-to-start.component';

describe('TimeToStartComponent', () => {
  let component: TimeToStartComponent;
  let fixture: ComponentFixture<TimeToStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeToStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeToStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

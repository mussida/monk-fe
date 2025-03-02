import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStandingComponent } from './user-standing.component';

describe('UserStandingComponent', () => {
  let component: UserStandingComponent;
  let fixture: ComponentFixture<UserStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPreviewCardComponent } from './user-preview-card.component';

describe('UserPreviewCardComponent', () => {
  let component: UserPreviewCardComponent;
  let fixture: ComponentFixture<UserPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPreviewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

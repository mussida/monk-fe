import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsPreviewCardComponent } from './teams-preview-card.component';

describe('TeamsPreviewCardComponent', () => {
  let component: TeamsPreviewCardComponent;
  let fixture: ComponentFixture<TeamsPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsPreviewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

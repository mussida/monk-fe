import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingPreviewsComponent } from './standing-previews.component';

describe('StandingPreviewsComponent', () => {
  let component: StandingPreviewsComponent;
  let fixture: ComponentFixture<StandingPreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingPreviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingPreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

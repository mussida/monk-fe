import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePreviewCardComponent } from './route-preview-card.component';

describe('RoutePreviewCardComponent', () => {
  let component: RoutePreviewCardComponent;
  let fixture: ComponentFixture<RoutePreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutePreviewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutePreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageComponent } from './home-image.component';

describe('HomeImageComponent', () => {
  let component: HomeImageComponent;
  let fixture: ComponentFixture<HomeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

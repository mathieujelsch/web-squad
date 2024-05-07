import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationTypeBannerComponent } from './simulation-type-banner.component';

describe('SimulationTypeBannerComponent', () => {
  let component: SimulationTypeBannerComponent;
  let fixture: ComponentFixture<SimulationTypeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationTypeBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimulationTypeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

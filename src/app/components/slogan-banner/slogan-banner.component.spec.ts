import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganBannerComponent } from './slogan-banner.component';

describe('SloganBannerComponent', () => {
  let component: SloganBannerComponent;
  let fixture: ComponentFixture<SloganBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SloganBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SloganBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

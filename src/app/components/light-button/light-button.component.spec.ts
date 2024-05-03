import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightButtonComponent } from './light-button.component';

describe('LightButtonComponent', () => {
  let component: LightButtonComponent;
  let fixture: ComponentFixture<LightButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

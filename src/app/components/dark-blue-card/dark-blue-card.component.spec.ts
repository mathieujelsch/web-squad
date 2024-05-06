import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBlueCardComponent } from './dark-blue-card.component';

describe('DarkBlueCardComponent', () => {
  let component: DarkBlueCardComponent;
  let fixture: ComponentFixture<DarkBlueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkBlueCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarkBlueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

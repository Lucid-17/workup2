import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegsComponent } from './legs.component';

describe('LegsComponent', () => {
  let component: LegsComponent;
  let fixture: ComponentFixture<LegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

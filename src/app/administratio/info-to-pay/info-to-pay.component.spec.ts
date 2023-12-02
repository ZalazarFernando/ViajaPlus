import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoToPayComponent } from './info-to-pay.component';

describe('InfoToPayComponent', () => {
  let component: InfoToPayComponent;
  let fixture: ComponentFixture<InfoToPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoToPayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoToPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

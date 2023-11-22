import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFindComponent } from './travel-find.component';

describe('TravelFindComponent', () => {
  let component: TravelFindComponent;
  let fixture: ComponentFixture<TravelFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelFindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

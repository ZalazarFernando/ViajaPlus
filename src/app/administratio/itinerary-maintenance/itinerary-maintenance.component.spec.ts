import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryMaintenanceComponent } from './itinerary-maintenance.component';

describe('ItineraryMaintenanceComponent', () => {
  let component: ItineraryMaintenanceComponent;
  let fixture: ComponentFixture<ItineraryMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItineraryMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItineraryMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

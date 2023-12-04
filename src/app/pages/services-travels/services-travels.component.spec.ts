import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTravelsComponent } from './services-travels.component';

describe('ServicesTravelsComponent', () => {
  let component: ServicesTravelsComponent;
  let fixture: ComponentFixture<ServicesTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesTravelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

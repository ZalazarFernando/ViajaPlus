import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicesTravelsComponent } from './list-services-travels.component';

describe('ServicesTravelsComponent', () => {
  let component: ListServicesTravelsComponent;
  let fixture: ComponentFixture<ListServicesTravelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListServicesTravelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListServicesTravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

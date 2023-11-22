import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInfoComponent } from './modify-info.component';

describe('ModifyInfoComponent', () => {
  let component: ModifyInfoComponent;
  let fixture: ComponentFixture<ModifyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

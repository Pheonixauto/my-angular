import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablesDetailComponent } from './vegetables-detail.component';

describe('VegetablesDetailComponent', () => {
  let component: VegetablesDetailComponent;
  let fixture: ComponentFixture<VegetablesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VegetablesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetablesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

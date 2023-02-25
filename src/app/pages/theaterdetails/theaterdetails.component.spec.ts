import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterdetailsComponent } from './theaterdetails.component';

describe('TheaterdetailsComponent', () => {
  let component: TheaterdetailsComponent;
  let fixture: ComponentFixture<TheaterdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheaterdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

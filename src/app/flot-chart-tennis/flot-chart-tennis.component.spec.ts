import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotChartTennisComponent } from './flot-chart-tennis.component';

describe('FlotChartTennisComponent', () => {
  let component: FlotChartTennisComponent;
  let fixture: ComponentFixture<FlotChartTennisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlotChartTennisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotChartTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

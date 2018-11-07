import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisflowchartComponent } from './tennisflowchart.component';

describe('TennisflowchartComponent', () => {
  let component: TennisflowchartComponent;
  let fixture: ComponentFixture<TennisflowchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisflowchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisflowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

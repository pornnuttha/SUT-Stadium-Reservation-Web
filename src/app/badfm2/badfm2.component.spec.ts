import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Badfm2Component } from './badfm2.component';

describe('Badfm2Component', () => {
  let component: Badfm2Component;
  let fixture: ComponentFixture<Badfm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Badfm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Badfm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

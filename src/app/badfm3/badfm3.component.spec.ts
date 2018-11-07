import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Badfm3Component } from './badfm3.component';

describe('Badfm3Component', () => {
  let component: Badfm3Component;
  let fixture: ComponentFixture<Badfm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Badfm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Badfm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

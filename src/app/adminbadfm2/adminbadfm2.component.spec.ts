import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminbadfm2Component } from './adminbadfm2.component';

describe('Adminbadfm2Component', () => {
  let component: Adminbadfm2Component;
  let fixture: ComponentFixture<Adminbadfm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminbadfm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminbadfm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

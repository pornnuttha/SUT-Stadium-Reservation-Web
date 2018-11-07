import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminbadfm3Component } from './adminbadfm3.component';

describe('Adminbadfm3Component', () => {
  let component: Adminbadfm3Component;
  let fixture: ComponentFixture<Adminbadfm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminbadfm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminbadfm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

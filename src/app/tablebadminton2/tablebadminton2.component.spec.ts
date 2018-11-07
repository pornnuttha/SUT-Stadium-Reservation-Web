import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablebadminton2Component } from './tablebadminton2.component';

describe('Tablebadminton2Component', () => {
  let component: Tablebadminton2Component;
  let fixture: ComponentFixture<Tablebadminton2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablebadminton2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablebadminton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

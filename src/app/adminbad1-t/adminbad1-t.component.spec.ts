import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminbad1TComponent } from './adminbad1-t.component';

describe('Adminbad1TComponent', () => {
  let component: Adminbad1TComponent;
  let fixture: ComponentFixture<Adminbad1TComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminbad1TComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminbad1TComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

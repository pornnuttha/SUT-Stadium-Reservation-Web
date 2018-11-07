import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbadmintonFComponent } from './adminbadminton-f.component';

describe('AdminbadmintonFComponent', () => {
  let component: AdminbadmintonFComponent;
  let fixture: ComponentFixture<AdminbadmintonFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbadmintonFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbadmintonFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

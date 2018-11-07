import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintennisfmComponent } from './admintennisfm.component';

describe('AdmintennisfmComponent', () => {
  let component: AdmintennisfmComponent;
  let fixture: ComponentFixture<AdmintennisfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintennisfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintennisfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbadfmComponent } from './adminbadfm.component';

describe('AdminbadfmComponent', () => {
  let component: AdminbadfmComponent;
  let fixture: ComponentFixture<AdminbadfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbadfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbadfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

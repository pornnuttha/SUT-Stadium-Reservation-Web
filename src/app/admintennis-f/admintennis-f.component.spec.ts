import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintennisFComponent } from './admintennis-f.component';

describe('AdmintennisFComponent', () => {
  let component: AdmintennisFComponent;
  let fixture: ComponentFixture<AdmintennisFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintennisFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintennisFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

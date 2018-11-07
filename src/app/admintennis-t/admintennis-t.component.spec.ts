import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintennisTComponent } from './admintennis-t.component';

describe('AdmintennisTComponent', () => {
  let component: AdmintennisTComponent;
  let fixture: ComponentFixture<AdmintennisTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintennisTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintennisTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

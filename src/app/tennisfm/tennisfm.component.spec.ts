import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisfmComponent } from './tennisfm.component';

describe('TennisfmComponent', () => {
  let component: TennisfmComponent;
  let fixture: ComponentFixture<TennisfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

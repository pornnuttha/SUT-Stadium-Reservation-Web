import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadfmComponent } from './badfm.component';

describe('BadfmComponent', () => {
  let component: BadfmComponent;
  let fixture: ComponentFixture<BadfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

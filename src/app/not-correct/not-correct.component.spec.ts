import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCorrectComponent } from './not-correct.component';

describe('NotCorrectComponent', () => {
  let component: NotCorrectComponent;
  let fixture: ComponentFixture<NotCorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotCorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

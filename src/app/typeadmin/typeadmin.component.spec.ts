import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeadminComponent } from './typeadmin.component';

describe('TypeadminComponent', () => {
  let component: TypeadminComponent;
  let fixture: ComponentFixture<TypeadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

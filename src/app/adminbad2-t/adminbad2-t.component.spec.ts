import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminbad2TComponent } from './adminbad2-t.component';

describe('Adminbad2TComponent', () => {
  let component: Adminbad2TComponent;
  let fixture: ComponentFixture<Adminbad2TComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adminbad2TComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Adminbad2TComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

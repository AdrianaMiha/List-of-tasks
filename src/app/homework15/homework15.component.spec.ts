import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework15Component } from './homework15.component';

describe('Homework15Component', () => {
  let component: Homework15Component;
  let fixture: ComponentFixture<Homework15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

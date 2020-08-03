import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework14Component } from './homework14.component';

describe('Homework14Component', () => {
  let component: Homework14Component;
  let fixture: ComponentFixture<Homework14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

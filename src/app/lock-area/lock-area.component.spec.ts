import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockAreaComponent } from './lock-area.component';

describe('LockAreaComponent', () => {
  let component: LockAreaComponent;
  let fixture: ComponentFixture<LockAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

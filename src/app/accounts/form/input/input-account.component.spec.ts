import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAccountComponent } from './input-account.component';

describe('InputAccountComponent', () => {
  let component: InputAccountComponent;
  let fixture: ComponentFixture<InputAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

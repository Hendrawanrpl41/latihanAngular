import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransactionComponent } from './data-transaction.component';

describe('DataTransactionComponent', () => {
  let component: DataTransactionComponent;
  let fixture: ComponentFixture<DataTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

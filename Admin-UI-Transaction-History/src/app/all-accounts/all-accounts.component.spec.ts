import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsComponent } from './all-accounts.component';

describe('AllAccountsComponent', () => {
  let component: AllAccountsComponent;
  let fixture: ComponentFixture<AllAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAccountsComponent]
    });
    fixture = TestBed.createComponent(AllAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

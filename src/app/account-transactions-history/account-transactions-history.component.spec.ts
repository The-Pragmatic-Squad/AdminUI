import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionsHistoryComponent } from './account-transactions-history.component';

describe('AccountTransactionsHistoryComponent', () => {
  let component: AccountTransactionsHistoryComponent;
  let fixture: ComponentFixture<AccountTransactionsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountTransactionsHistoryComponent]
    });
    fixture = TestBed.createComponent(AccountTransactionsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

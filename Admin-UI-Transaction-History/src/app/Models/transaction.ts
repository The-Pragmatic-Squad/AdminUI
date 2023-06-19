enum TransactionType{DEPIT, CREDIT}
export class Transaction{
    id: number = 0;
    accountId: number = 0;
    date: Date = new Date();
    amount: number = 0.0;
    balanceBefore: number = 0.0;
    balanceAfter: number = 0.0;
    type: TransactionType = TransactionType.CREDIT;
} 
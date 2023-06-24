enum TransactionType{DEPIT, CREDIT}
export interface Transaction{
    id: number;
    // accountId: number = 0;
    title: string;
    usertId: number;
    // date: Date = new Date();
    // amount: number = 0.0;
    // balanceBefore: number = 0.0;
    // balanceAfter: number = 0.0;
    // type: TransactionType = TransactionType.CREDIT;
} 
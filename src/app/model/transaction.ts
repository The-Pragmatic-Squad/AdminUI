export interface Transaction {
    id: number;
    accountId: number;
    userId: number;
    date: Date;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    type: string;
    status: string;
} 
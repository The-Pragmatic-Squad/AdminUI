enum TransactionType { DEPOSIT, WITHDRAWAL }
enum TransactionStatus { PENDING, SUCCESS, FAILED }
export interface Transaction {
    id: number;
    accountId: number;
    usertId: number;
    date: Date;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    type: string;
    status: string;
} 
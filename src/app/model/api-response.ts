export interface ApiResponse<T> {
    id: number;
    accountId: number;
    userId: number;
    date: Date;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    type: string;
    status: string;
    data: { page: T };
}
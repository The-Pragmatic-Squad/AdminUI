enum AccountType { VIP, STANDARD }
export interface Account {
    id: number;
    username: string;
    email: string;
    balance: number;
    createdAt: string;
    lastTransaction: string;
    active: boolean;
    type: string;
}



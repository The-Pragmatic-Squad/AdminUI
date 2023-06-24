export interface AccountDetailed{
    username: string;
    email: string;
    password: string;
    phone: string;
    creditNumber: string;
    balance: number;
    createdAt: Date;
    lastTransaction: any;
    type: string;
    active: boolean;
}
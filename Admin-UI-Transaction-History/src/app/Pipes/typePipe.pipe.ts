import { Pipe, PipeTransform } from "@angular/core";
import { Transaction } from "../Models/transaction";

enum TransactionType{CREDIT, DEPIT}
@Pipe({
    name:'filterByType'
})

export class TypeFilterPipe implements PipeTransform{
    transform(transactions: Transaction[], type: string) {
        if(transactions.length === 0 || type === '')
            return transactions;
        else{
            return transactions.filter((trans)=>{
                return TransactionType[trans.type].toLowerCase() === type.toLowerCase();
            })
        }

    }
}
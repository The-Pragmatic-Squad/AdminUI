import { Pipe, PipeTransform } from "@angular/core";
import { Transaction } from "../Models/transaction";

@Pipe({
    name:'filterByDate'
})

export class DateFilterPipe implements PipeTransform{
    transform(transactions: Transaction[], dateFrom: string, dateTo: string) {
        if(transactions.length === 0 || dateFrom === '' || dateTo === '') 
            return transactions;
        else{
            return transactions.filter((trans)=>{
                return trans.date.toISOString ()>= new Date(dateFrom).toISOString() && 
                       trans.date.toISOString ()<= new Date(dateTo).toISOString();
            })
        }

    }
}
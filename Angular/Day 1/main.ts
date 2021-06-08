class Account {
    // acc_no:string;
    // balance:number;
    constructor(protected acc_no:string="123", protected balance:number=5000) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    debitAmount() {
        return 'Debit';
    }
    creditAmount() {
        return 'Credit';
    }
    getBalance() {
        return `Your balance is ${this.balance}`;
    }
}

interface IAccount {
    date_of_opening:string;
    addCustomer():string;
    removeCustomer():string;
}

class Current_Account extends Account implements IAccount {
    date_of_opening:string = '22/4/2017';
    constructor(protected interest_rate:number = 0.3) {
        super()
    }
    addCustomer() {
        return 'Customer added!'
    }
    removeCustomer() {
        return 'Customer removed!'
    }
}

class Saving_Account extends Account implements IAccount {
    date_of_opening:string = '22/4/2017';
    constructor(protected min_balance:number) {
        super()
    }
    addCustomer() {
        return 'Customer added!'
    }
    removeCustomer() {
        return 'Customer removed!'
    }
}
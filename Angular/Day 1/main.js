var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    // acc_no:string;
    // balance:number;
    function Account(acc_no, balance) {
        if (acc_no === void 0) { acc_no = "123"; }
        if (balance === void 0) { balance = 5000; }
        this.acc_no = acc_no;
        this.balance = balance;
        this.acc_no = acc_no;
        this.balance = balance;
    }
    Account.prototype.debitAmount = function () {
        return 'Debit';
    };
    Account.prototype.creditAmount = function () {
        return 'Credit';
    };
    Account.prototype.getBalance = function () {
        return "Your balance is " + this.balance;
    };
    return Account;
}());
var Current_Account = /** @class */ (function (_super) {
    __extends(Current_Account, _super);
    function Current_Account(interest_rate) {
        if (interest_rate === void 0) { interest_rate = 0.3; }
        var _this = _super.call(this) || this;
        _this.interest_rate = interest_rate;
        _this.date_of_opening = '22/4/2017';
        return _this;
    }
    Current_Account.prototype.addCustomer = function () {
        return 'Customer added!';
    };
    Current_Account.prototype.removeCustomer = function () {
        return 'Customer removed!';
    };
    return Current_Account;
}(Account));
var Saving_Account = /** @class */ (function (_super) {
    __extends(Saving_Account, _super);
    function Saving_Account(min_balance) {
        var _this = _super.call(this) || this;
        _this.min_balance = min_balance;
        _this.date_of_opening = '22/4/2017';
        return _this;
    }
    Saving_Account.prototype.addCustomer = function () {
        return 'Customer added!';
    };
    Saving_Account.prototype.removeCustomer = function () {
        return 'Customer removed!';
    };
    return Saving_Account;
}(Account));

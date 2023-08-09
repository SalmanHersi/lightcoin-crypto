let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    return this.transactions.reduce((sum, transaction) => sum + transaction, 0);
  }

  addTransaction(value) {
    this.transactions.push(value);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this.value());
    return true;
  }

  value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  commit() {
    if (this.account.balance - this.amount < 0) {
      return false;
    } else {
      super.commit();
    }
  }

  value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {}

// DRIVER CODE
// const myAccount = new Account();

// console.log("Starting Account Balance:", myAccount.balance);

// console.log("Attempting to withdraw even $1 should fail...");
// const t1 = new Withdrawal(1.0, myAccount);
// console.log("Commit result:", t1.commit());
// console.log("Account Balance:", myAccount.balance);

// console.log("Depositing should succeed...");
// const t2 = new Deposit(9.99, myAccount);
// console.log("Commit result:", t2.commit());
// console.log("Account Balance:", myAccount.balance);

// console.log("Withdrawal for 9.99 should be allowed...");
// const t3 = new Withdrawal(9.99, myAccount);
// console.log("Commit result:", t3.commit());

// console.log("Ending Account Balance:", myAccount.balance);
// console.log("Looks like I'm broke again");

// console.log("Account Transaction History:", myAccount.transactions);

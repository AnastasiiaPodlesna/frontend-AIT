// Создать объект bankAccount (DEBIT CARD), который:

// accountNumber: "123456789"
// accountHolderName: "Alice"
// balance: 0
// deposit(sum) { TODO Пополнение счёта }
// withdraw(sum) { TODO Списание счёта }
// checkBalance() { ODO Просмотр баланса счёта }

let bankAccount = 
{
   accountNumber: "123456789",
   accountHolderName: "Alice",
   balance: 0,

   deposit: function(sum)
   {
        if (sum > 0) 
        {
          this.balance += sum;     
          console.log(`Deposit: ${sum}USD. Balance: ${this.balance}USD`);
        } else  
               {
                  console.log("Input error...");
               }
        },
 
    withdraw: function(sum) 
    {
        if (sum > 0 && sum <= this.balance) 
            {
               this.balance -= sum;     
               console.log(`Withdrawn: ${sum}USD. Balance: ${this.balance}USD`);
            } else 
                    {
                       console.log("Input error or insufficient funds on account...");
                    }
    },

    // метод для просмотра баланса
    checkBalance: function() 
    {
        console.log(`Balance: ${this.balance}USD`);
    }
};

bankAccount.deposit(1000);    // пополнение счета 
bankAccount.withdraw(600);    // снятие допустимой суммы
bankAccount.checkBalance();   // проверка текущего баланса
bankAccount.withdraw(600);    // снятие недопустимой суммы
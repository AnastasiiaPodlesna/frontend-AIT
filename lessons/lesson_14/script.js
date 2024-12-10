
let bankAccount = 
{
   accountNumber: "123456789",
   accountHolderName: "Alice",
   balance: 0,

   deposit: function(sum)
   {
        if (sum > 0) // sum > 0 ? this.balance += sum : alert(" ")
        {
          this.balance += sum;     
          console.log(`Deposit: ${sum}USD. Balance: ${this.balance}USD`);
        } else  
               {
                  console.log("Input error..."); // alert("")- вывод на экран сообщения; 
                  //confirm ("") - окно с взаимодействием с пользователем, возвращает значение false/true; 
                  // prompt("") - получение данных от пользователя в формате строки;
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

let accounts = [];

function createAccount()
{
    
    const name = document.getElementById("name").value.trim();

    if (name) 
    {
        accounts.push
        ({
            ...bankAccount,
            accountNumber: accounts.length + 1,    
            accountHolderName: name
        })
        alert('Account created successfully');
    }
    else
    {
       alert('Please, enter a valid name');
    }
    document.getElementById("name").value = "";
};

function showAccounts()
{
    const accountList = document.getElementById("accountList");
    accountList.innerHTML = "";

    accounts.forEach(account => 
    {
        const listItem = document.createElement("li");
        listItem.textContent = `Account ID: ${account.accountNumber}, Name: ${account.name}, Balance: ${account.balance}`;
        accountList.appendChild(listItem);
    });



};
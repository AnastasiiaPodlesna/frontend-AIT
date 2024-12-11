
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

// --------------------------------------------- 2 section -------------------------------------------------------


// function showAccounts()
// {
//     const accountList = document.getElementById("accountList");
//     accountList.innerHTML = "";

//     accounts.forEach(account => 
//     {
//         const listItem = document.createElement("li");
//         listItem.textContent = `Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;
//         accountList.appendChild(listItem);
//     });

// };

// 2 вариант --------------------------------------------------------------------------------------

 function showAccounts()
 {
     const accountList = document.getElementById('accountList');
     accountList.innerHTML = ''; // очищаем список;

    // for (const account of accounts) 
    // {
    //     const li = document.createElement('li');
    //     li.textContent = 'Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}';
    //     accountList.appendChild(li);

    //     // accountList.innerHTML += '<li>Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>';
    // }
 
    accounts.forEach((account, index) => 
         {
            accountList.innerHTML += `<li> ${index + 1}. Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance} </li>`;
         });

 }

 // --------------------------------------------- 3 section -------------------------------------------------------

 const withdraw = document.getElementById('withdraw');
 const deposit = document.getElementById('deposit');

 deposit.onclick = function() {

 const id = document.getElementById("accountId").value.trim();
 const amount = parseFloat(document.getElementById("amount").value.trim());

    if (id > 0 && id <= accounts.length) {

        if (amount > 0)
        {
            accounts[id - 1].balance += amount;

          
             const accountList = document.getElementById("accountList");
             accountList.innerHTML = ''; 
    
             accounts.forEach((account, index) => 
             {
             accountList.innerHTML += `<li> ${index + 1}. Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance} </li>`;
             });
        }  

        else {
            alert('Incorrect input')
        };
    }
    else {
        alert('Incorrect input for account ID')
    };

    document.getElementById("accountId").value = "";
    document.getElementById("amount").value = "";
  
 }

 withdraw.onclick = function() {

    const id = document.getElementById("accountId").value.trim();
    const amount = parseFloat(document.getElementById("amount").value.trim());

    if (id > 0 && id <= accounts.length) {

        if (amount > 0 && amount <= accounts[id - 1].balance)
        {
            accounts[id - 1].balance -= amount;

          
             const accountList = document.getElementById("accountList");
             accountList.innerHTML = ''; 
    
             accounts.forEach((account, index) => 
             {
             accountList.innerHTML += `<li> ${index + 1}. Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance} </li>`;
             });
        }  

        else {
            alert('Incorrect input')
        };
    }
    else {
        alert('Incorrect input for account ID')
    };

    document.getElementById("accountId").value = "";
    document.getElementById("amount").value = "";
 }
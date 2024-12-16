
let bankAccount =
{
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,

    deposit: function (sum) //  sum - число
    {
        if (sum > 0) // sum > 0 ? this.balance += sum : alert(" ")
        {
            this.balance += sum;
            //console.log(`Deposit: ${sum}USD. Balance: ${this.balance}USD`);
        } else {
            alert("Input error...");
            // alert("")- вывод на экран сообщения; 
            //confirm ("") - окно с взаимодействием с пользователем, возвращает значение false/true; 
            // prompt("") - получение данных от пользователя в формате строки;
        }
    },

    withdraw: function (sum) {
        if (sum > 0 && sum <= this.balance) {
            this.balance -= sum;
            //console.log(`Withdrawn: ${sum}USD. Balance: ${this.balance}USD`);
        } else {
            alert("Input error or insufficient funds on account...");
        }
    },

};

//------------------------------------------ создание аккаунтов ---------------------------------------------

let accounts = []; // МАССИВ АККАУНТОВ

function createAccount() {
    const name = document.getElementById("name").value.trim();

    if (name) {
        accounts.push
            ({
                ...bankAccount,
                accountNumber: accounts.length + 1,
                accountHolderName: name
            })
        alert('Account created successfully');
    }
    else {
        alert('Please, enter a valid name');
    }
    document.getElementById("name").value = "";
};

// --------------------------------- 2 section - отображение аккаунтов -------------------------------------------

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

function showAccounts() {
    const accountList = document.getElementById('accountList');
    accountList.innerHTML = ''; // очищаем список;

    // for (const account of accounts) 
    // {
    //     const li = document.createElement('li');
    //     li.textContent = 'Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}';
    //     accountList.appendChild(li);

    //     // accountList.innerHTML += '<li>Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>';
    // }


    accounts.forEach((account, index) => {
        
        const li = document.createElement('li');
        li.textContent = `Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}`;
     
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.append(deleteBtn);
        accountList.append(li);

        deleteBtn.onclick = function() {
        accounts.splice(index, 1);
        li.remove();
        }
    });
}

// ------------------------------------------ удаление аккаунтов ------------------------------------------------

function deleteAccount(index) {
    accounts.splice(index, 1);
    showAccounts();
}

// --------------------------------------------- 3 section -------------------------------------------------------

const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');

// ----------------------------------------------
deposit.onclick = function () {

    const id = document.getElementById("accountId").value.trim();
    const amount = parseFloat(document.getElementById("amount").value.trim()); // или поставить знак +, чо бы получить число или еще вариант eval('10+10+5'), кот.строку из мат выражения считает и переводит в число

    // есть метод поиска элемента const findAccount = accounts.find(account => account.accountNumber === accountId);
    // возвращает сам элемент, кот. ищет или undefined и есть метод findIndex возвращает индекс или -1


    const account = (accounts.find(e => e.accountNumber === +id))

    if (account) {
        account.deposit(amount);
        showAccounts();
    }
    else {
        alert('Incorrect ID-account input...');
    }

    document.getElementById("accountId").value = "";
    document.getElementById("amount").value = "";
}

// -------------------------------------------------

withdraw.onclick = function () {

    const id = document.getElementById("accountId").value.trim();
    const amount = parseFloat(document.getElementById("amount").value.trim());

    const account = (accounts.find(e => e.accountNumber === +id))

    if (account) {
        account.withdraw(amount);
        showAccounts();
    }
    else {
        alert('Incorrect ID-account input...');
    }

    document.getElementById("accountId").value = "";
    document.getElementById("amount").value = "";
}
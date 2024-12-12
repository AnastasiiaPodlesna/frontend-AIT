
let bankAccount =
{
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,

    deposit: function (sum) {
        sum > 0 ? this.balance += sum : alert("Input error...");
    },

    withdraw: function (sum) {
        sum > 0 && sum <= this.balance ? this.balance -= sum : alert("Input error or insufficient funds on account...");
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

function showAccounts() {
    const accountList = document.getElementById('accountList');
    accountList.innerHTML = ''; // очищаем список;

    accounts.forEach((account, index) => {
        accountList.innerHTML += `<li> ${index + 1}. Account ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance} <button class = deleteButton onclick="deleteAccount(${index})" >DELETE</button> </li>`;
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
    const amount = parseFloat(document.getElementById("amount").value.trim()); 
    
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
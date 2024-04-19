const url = "https://poupe-mais-api.vercel.app";
const token = sessionStorage.getItem("token");

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

const logoutBtn = document.getElementById("logout-btn")

logoutBtn.addEventListener("click", function (event) {
    event.preventDefault();
    logout();
});

async function getUserData() {
    const usernameElement = document.getElementById("username");
    const incomeElement = document.getElementById("total-incomes");
    const expenseElement = document.getElementById("total-expense");
    const totalElement = document.getElementById("monthly-income");
    const greetingMessage = document.getElementById("greeting-message");

    //Definindo a saudação conforme a hora do dia
    const data = new Date();
    const time = data.getHours();
    if (time >= 5 && time < 12) {
        greetingMessage.innerHTML = "Bom dia,";
    }
    else if (time >= 12 && time < 18) {
        greetingMessage.innerHTML = "Boa tarde,";
    } else if (time >= 18 || time < 5) {
        greetingMessage.innerHTML = "Boa noite,";
    }

    const username = sessionStorage.getItem("username");
    usernameElement.textContent = username;

    await fetch(`${url}/transaction/list`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            if (!response.ok) { throw new Error(response.statusText) }

            return response.json();
        })
        .then(function (data) {
            const transactions = data.body;

            console.log(transactions);

            const incomes = transactions.filter(({ type }) => type == "INCOME")
            const expenses = transactions.filter(({ type }) => type == "EXPENSE")

            const totalIncomes = incomes.reduce((accumulator, currentValue) => { return accumulator + currentValue.value }, 0);
            const totalExpenses = expenses.reduce((accumulator, currentValue) => { return accumulator + currentValue.value }, 0);
            const total = totalIncomes - totalExpenses;

            incomeElement.innerHTML = `<span> + R$ ${totalIncomes}</span>`;
            expenseElement.innerHTML = `<span> - R$ ${totalExpenses}</span>`;
            totalElement.innerHTML = `<span>R$ ${total}</span>`;


        })
        .catch(function (error) {
            console.error(error);
        })
}

getUserData();
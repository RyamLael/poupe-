// Modal income
const incomeModal = document.getElementById("income-modal");
const openIncomeModalBtn = document.getElementById("show-income-modal");

openIncomeModalBtn.addEventListener("click", () => {
  incomeModal.showModal();
});

incomeModal.addEventListener("mousedown", (event) => {
  if (event.target === incomeModal) {
    incomeModal.close();
  }
});

// Modal outcome
const outcomeModal = document.getElementById("expense-modal");
const openBtn = document.getElementById("show-expense-modal");

openBtn.addEventListener("click", () => {
  outcomeModal.showModal();
});

outcomeModal.addEventListener("mousedown", (event) => {
  if (event.target === outcomeModal) {
    outcomeModal.close();
  }
});

// Modal settings
const settingsModal = document.getElementById("settings-modal");
const openSettingsBtn = document.getElementById("show-settings-modal");

const changeName = document.getElementById("change-name");
const changeIncome = document.getElementById("change-monthly-income");

changeName.value = sessionStorage.getItem("username");
changeIncome.value = sessionStorage.getItem("monthlyIncome");

openSettingsBtn.addEventListener("click", () => {
  settingsModal.showModal();
})

settingsModal.addEventListener("mousedown", (event) => {
  if (event.target === settingsModal) {
    settingsModal.close();
  };
})
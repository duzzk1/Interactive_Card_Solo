const inpName = document.querySelector("#name");
const cardName = document.querySelector(".card_name");
inpName.addEventListener("keyup", () => {
  let escrita = inpName.value;
 
    cardName.textContent = escrita;
 
})

const inpNumber = document.querySelector("#number");
const cardNumber = document.querySelector(".card_number");
inpNumber.addEventListener("keyup", () => {
  
  let escrita = inpNumber.value;
  cardNumber.textContent = escrita;
  
})

const inpMonth = document.querySelector("#month");
const cardMonth = document.querySelector(".month");
inpMonth.addEventListener("keyup", () => {
  
  let escrita = inpMonth.value;
  cardMonth.textContent = escrita;
  
})

const inpYear = document.querySelector("#year");
const cardYear = document.querySelector(".year");
inpYear.addEventListener("keyup", () => {
  
  let escrita = inpYear.value;
  cardYear.textContent = escrita;
  
})

const inpCVC = document.querySelector("#cvc");
const cardCVC = document.querySelector(".card_cvc");
inpCVC.addEventListener("keyup", () => {
  
  let escrita = inpCVC.value;
  cardCVC.textContent = escrita;
  
})



// Log-in button Event Handler

let button= document.getElementById("loginBtn")

button.addEventListener("click",function() {
    
 let loginArea= document.getElementById("loginArea");

 loginArea.style.display="none";//This is also a noted Things.If It is a (p,h1,span,div) tag then we can acesss it value by (.innerText)

 let transactionArea = document.getElementById("tracsaction-Area");

 transactionArea.style.display="block";
  
})

//Deposit Button Event Handler

let depositButton = document.getElementById("Deposit-button");

depositButton.addEventListener("click",function () {

    let depositAmount = getInputValue("deposit-amount");//This is Noted Things.If It is Input Tag The we can access it by (.value)

    spanUpdate("current-amount",depositAmount);

    spanUpdate("current-balance",depositAmount);
    
    document.getElementById("deposit-amount").value = "";//This is also noted things.if you we want make a  value empty then we can epmty a (empty string)

})

//Withdraw Button Event Handle

let withdrawButton = document.getElementById("Withdraw-button");

withdrawButton.addEventListener("click",function () {

    let withdrawAmount =getInputValue("withdraw-amount");

    spanUpdate("current-withdraw",withdrawAmount);

    spanUpdate("current-balance",-1 * withdrawAmount);

    document.getElementById("withdraw-amount").value = "";//This is also noted things.if you we want make a  value empty then we can epmty a (empty string)

})

function getInputValue (id) 
{
    let amount =document.getElementById(id).value;

    amountNumber=parseFloat(amount);

    return amountNumber;
    
}

function spanUpdate(id,depositAmount ) 
{
    let currentAmount = document.getElementById(id).innerText;
      
    currentAmount = parseFloat(currentAmount);

    let totalAmount = depositAmount + currentAmount;

    document.getElementById(id).innerText=totalAmount;
}
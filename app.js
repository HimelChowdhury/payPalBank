document.getElementById("loginBtn").addEventListener("click", function(){
   document.getElementById("login-area").style.display = "none"

   document.getElementById("transaction-area").style.display = "block"
})


//dipositpart

const DepositButton = document.getElementById('addButton');
DepositButton.addEventListener('click', function(){
 const deposit= document.getElementById('DipositAmount').value;
 const depositNumber = parseFloat(deposit)


 
 

//  const currentDiposit = document.getElementById('currentDiposit').innerText;
//  const currentNumber = parseFloat(currentDiposit)
//  const totalDiposit = depositNumber + currentNumber;
//  document.getElementById('currentDiposit').innerText = totalDiposit; 
handelBalance("currentDiposit", depositNumber)


 document.getElementById('DipositAmount').value= "";



   //  const balance = document.getElementById('Tolal-Balance1').innerText;
   //  const totalBalance1 = parseFloat(balance)
   //  const getBalance = depositNumber + totalBalance1;
   //  document.getElementById('Tolal-Balance1').innerText = getBalance;
   handelBalance("Tolal-Balance1", depositNumber)
    


 
})

function handelBalance(controlId, depositNumber){

   const balance = document.getElementById(controlId).innerText;
   const totalBalance1 = parseFloat(balance)
   const getBalance = depositNumber + totalBalance1;
   document.getElementById(controlId).innerText = getBalance;
   


}
 
 document.getElementById('wid-Button').addEventListener('click', function(){

  const Widrow= document.getElementById('Widrow-Amount').value;
  const WindrowNumber = parseFloat(Widrow)
 
 
//   const currentWidrow = document.getElementById('currentWithdraw').innerText;
//   const currentNumber = parseFloat(currentWidrow)
//   const totalWidrow = WindrowNumber + currentNumber;
//   document.getElementById('currentWithdraw').innerText = totalWidrow; 

handelBalance("currentWithdraw", WindrowNumber)


   document.getElementById('Widrow-Amount').value = "";


   //   const balance = document.getElementById('Tolal-Balance1').innerText;
   //  const totalBalance2 = parseFloat(balance)
   //  const getBalance2 =  totalBalance2  - WindrowNumber ;
   //  document.getElementById('Tolal-Balance1').innerText = getBalance2;

   handelBalance("Tolal-Balance1",-1* WindrowNumber)

    



})
   


 








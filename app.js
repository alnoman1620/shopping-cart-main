function updateInput(product,price, isIncrs){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrs == true){
        productNumber = parseFloat(productNumber) + 1
    }
    else if(productNumber > 0){
        productNumber = parseFloat(productNumber) - 1
    }
    productInput.value = productNumber
    
    // update total
    const itemTotal = document.getElementById(product + '-total')
    itemTotal.innerText = productNumber * price;
    calculateTotal();
   
}
// phone button 

document.getElementById('phone-plus').addEventListener('click',function(){
    updateInput('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateInput('phone',1219,false)
})
// case Button 
document.getElementById('case-plus').addEventListener('click',function(){
    updateInput("case",59,true)

})
document.getElementById('case-minus').addEventListener('click',function(){
    updateInput("case",59,false)
})


// update total
function getInput(product){
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseFloat(productInput.value);
    return productNumber;

}

function calculateTotal(){
  const phoneTotal = getInput('phone') * 1219;
  const caseTotal = getInput('case') * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const total = subTotal + tax;
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = total;

 }
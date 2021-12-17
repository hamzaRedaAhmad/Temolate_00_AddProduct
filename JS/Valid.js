const form = document.getElementById('form')
const productName = document.getElementById('productName')
const productNumber = document.getElementById('productNumber')
const productN = document.getElementById('productN')
const productType = document.getElementById('productType')
const manufacturingYear = document.getElementById('manufacturingYear')
const priceProduct = document.getElementById('priceProduct')

form.addEventListener('submit',(e)=>{
 e.preventDefault();
 checkInputs();
});  
form.addEventListener('keyup',(e)=>{
    e.preventDefault();
    checkInput();
   }); 
   function checkInput(){
    const productNumberValue = productNumber.value.trim();
    const productNValue = productN.value.trim();
    const manufacturingYearValue = manufacturingYear.value.trim();
    if(productNumberValue.length>0 || productNumberValue.length<=3){
        onlyLetter(productNumber);
   }
   if(productNValue.length>4 || productNValue.length<=10){
    onlyNum(productN);
   }
   if(manufacturingYearValue.length < 4 ||manufacturingYearValue.length>=0 ){
    onlyNum(manufacturingYear);
}
   }
function checkInputs() {
    const productNameValue = productName.value.trim();
    const productNumberValue = productNumber.value.trim();
    const productTypeValue = productType.value.trim();
    const manufacturingYearValue = manufacturingYear.value.trim();
    const priceProductValue = priceProduct.value.trim();

    if (productNameValue === '') {
        setErrorFor(productName, 'Plase fill product name');
    }
    else {
        setSuccessFor(productName);
    }
    if (productNumberValue === '' ) {
        setErrorFor(productNumber, 'Plase fill product number');
    }
    else {
        setSuccessFor(productNumber);
    }
    if(manufacturingYearValue.length > 4 ||manufacturingYearValue.length<=0 ){
        setErrorFor(manufacturingYear, 'manufacturingYear is 4 number');
    }
    else {
        onlyNum(manufacturingYear); 
        setSuccessFor(manufacturingYear);
    }
    if(productNumberValue.length>10 ||productNumberValue.length<=0 ){
        setErrorFor(productNumber, 'Plase fill product number between 1 and 10');
    }

}


 function setErrorFor(input,message){
     const formControl = input.parentElement;
     const small = formControl.querySelector('small');
     small.innerText =message;
     formControl.className = 'form-control error';
 }
 function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }
   function onlyLetter(input){
    var reg = /[^a-zA-Z]/gi;
    input.value = input.value.replace(reg,"");
}
function onlyNum(input){
    var reg = /[^0-9]/g;
    input.value = input.value.replace(reg,"");
}
   

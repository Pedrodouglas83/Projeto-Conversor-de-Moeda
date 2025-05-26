
const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 637.45
const peso = 0.0050

const convertValues = () => {
     const inputReais = document.getElementById('input-real').value
     const realValue = document.getElementById('real-value')
     const currencyDolar = document.getElementById('currency-dolar')
    

     realValue.innerHTML = new Intl.NumberFormat('pt-BR',
          { style: 'currency', currency: 'BRL' }    /// Real 
     ).format(inputReais);

if (select.value === "US$ Dólar Americano") {
     currencyDolar.innerHTML = new Intl.NumberFormat('en-US',
          { style: 'currency', currency: 'USD' }  // Dolar
     ).format(inputReais / dolar);
}
  
if (select.value === "€ euro") {
     currencyDolar.innerHTML = new Intl.NumberFormat('de-DE',
          { style: 'currency', currency: 'EUR' }  // Euro
     ).format(inputReais / euro);
}  

if (select.value === "Bitcon") {
     currencyDolar.innerHTML = new Intl.NumberFormat('de-DE',
          { style: 'currency', currency: 'BRL' }  // Euro
     ).format(inputReais / bitcoin);
}  

if (select.value === "Peso") {
     currencyDolar.innerHTML = new Intl.NumberFormat('es-AR',
          { style: 'currency', currency: 'ARS' }  // Euro
     ).format(inputReais / peso);
}  

     
}
 changeCurrency = () => {
   const currencyName = document.getElementById("currency-name")
   const currencyImg = document.getElementById("currency-img") 


   if(select.value === 'US$ Dólar Americano') {
     currencyName.innerHTML = "Dólar Americano"
     currencyImg.src = "./assets/estados.unidos.png"
   }

   if(select.value === '€ euro') {
     currencyName.innerHTML = "Euro"
     currencyImg.src = "./assets/euro.png"
   }

   if(select.value === 'Bitcon') {
     currencyName.innerHTML = "Bitcon"
     currencyImg.src = "./assets/bitcoin.png"
   }

   if(select.value === 'Peso') {
     currencyName.innerHTML = "Peso"
     currencyImg.src = "./assets/argentina.png"
   }

   convertValues()
} 

button.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)  




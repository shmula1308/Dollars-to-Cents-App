
const convertBtn = document.querySelector('.btn');
const input = document.querySelector('input[type="text"]');
const resultContainer = document.querySelector('.result-container');
const displayAlert = document.querySelector('alert');

document.addEventListener('DOMContentLoaded', () => {
    convertBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
    if(validateInput(input.value)) {
        dollarToCents(input.value)
    } else {
        resultContainer.innerHTML = ' <p class="alert">Incorrect value</p>'
        return;
    }
})
})


const validateInput = (str) => {
    let length;
    if(isNaN(str)) {
        return false;
    } 
    if(str.includes('.')) {
        length = str.split('.')[1].length 
    }
    if(length>2) {
        return false;
    }
    return true;
}

const dollarToCents = (dollars) => {
    let cents = Number(dollars) * 100; //get cents
    let quarters = Math.floor(cents / 25); //get quarters
    let remainder = cents%25; //get reaminder after getting quarters
    let dimes,temp,nickels,pennies;
    if(remainder >= 10) {
        dimes = Math.floor(remainder/10);
        temp = remainder % 10;
        console.log('temp',temp,dimes)
      }
      
      if(temp >= 5) {
        nickels = Math.floor(temp / 5);
        pennies = temp % 5;
      }
      
      if(temp < 5 || temp === 0) {
        nickels = 0;
        pennies = temp;
        
      }
      
      if(remainder >= 5 && remainder < 10) {
        nickels = Math.floor(remainder / 5);
        pennies = remainder % 5;
        dimes = 0;
      }
      
      if(remainder < 5) {
        pennies = remainder;
        dimes = 0;
        nickels = 0;
      }
      resultContainer.innerHTML = "";
      resultContainer.innerHTML = `
      <p class="cents">Total cents: ${cents}</p>
      <table>
          <tbody>
              <tr class="tabel-row">
                  <th>Coins</th>
                  <th>Count</th>
              </tr>
              <tr class="tabel-row">
                  <td class="table-data"><i class="fas fa-coins"></i>Quarters (25 ¢)</td>
                  <td class="table-data">${quarters}</td>
              </tr>
              <tr class="tabel-row">
                  <td class="table-data"><i class="fas fa-coins"></i>Dimes (10 ¢)</td>
                  <td class="table-data">${dimes}</td>
              </tr>
              <tr class="tabel-row">
                  <td class="table-data"><i class="fas fa-coins"></i>Nickels (5 ¢)</td>
                  <td class="table-data">${nickels}</td>
              </tr>
              <tr class="tabel-row">
                  <td class="table-data"><i class="fas fa-coins"></i>Pennies (1 ¢)</td>
                  <td class="table-data">${pennies}</td>
              </tr>
          </tbody> 
      </table>`

      resultContainer.style.display = "block";

}















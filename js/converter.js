
const convertBtn = document.querySelector('.btn');
const input = document.querySelector('input[type="text"]');
const resultContainer = document.querySelector('.result-container');
const displayAlert = document.querySelector('alert');


document.addEventListener('DOMContentLoaded', () => {
    convertBtn.addEventListener('click', (ev) => {
    ev.preventDefault()
  // If input is a number with only two decimal points, convert dollarsToCents
    if(validateInput(input.value)) { 
        dollarToCents(input.value)
    } else {
  //If input is invalid alert user
        resultContainer.innerHTML = ' <p class="alert">Incorrect value</p>'
        return;
    }
})
})


const validateInput = (str) => {
    let length;
    //if input is not a number return false
    if(isNaN(str)) {
        return false;
    } 
    //check if input is a floating point number, if it is get the number of decimal points
    if(str.includes('.')) {
        length = str.split('.')[1].length 
    }
    //If number of decimal points is bigger than two return false
    if(length>2) {
        return false;
    }
    //in all other cases return true
    return true;
}

const dollarToCents = (dollars) => {
    let cents = Math.floor(Number(dollars) * 100); //get cents. Round the number
    let quarters = Math.floor(cents / 25); //get quarters
    let remainder = cents%25; //get reaminder after getting quarters
    let dimes,temp,nickels,pennies; 
    if(remainder >= 10) {
        dimes = Math.floor(remainder/10);
        temp = remainder % 10;
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















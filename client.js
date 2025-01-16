
totalMonthly = 0;
let monthlyInput = document.querySelector('#monthlyid');
//  Formatting salary input to currency
let usDollar = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
});

function submitButton() {
    console.log("Submit button clicked!");
     
    //   appending to the field inputs  and ids in html
     let fNameInput = document.querySelector('#firstid').value;
     let lNameInput = document.querySelector('#lastid').value;
     let idInput = document.querySelector('#idid').value;
     let titleInput = document.querySelector('#titleid').value;
     let salaryInput = document.querySelector('#salaryid').value;
     let tableAppend = document.querySelector('#tableid');
     
     let formattedSal = usDollar.format(salaryInput);
    //   adding a row with the new information
    tableAppend.innerHTML += `
      <tr> 
        <td>${fNameInput}</td>
        <td>${lNameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td>${formattedSal}</td>
        <td><button onclick = "deleteButton(event)">Delete</button></td>
     </tr>
   `
    //  calculating monthly salary
    let msalary = salaryInput/12;
      totalMonthly += msalary;

    //   calling function to add salary to total monthly salary
    addMonthlySalary ()

    //    clearing the field inputs after submitting
    document.querySelector('#firstid').value = '';
    document.querySelector('#lastid').value = '';
    document.querySelector('#idid').value = '';
    document.querySelector('#titleid').value = '';
    document.querySelector('#salaryid').value = '';

    };


// function adds the monthly total salary
function addMonthlySalary (){
    formMonSal = usDollar.format(totalMonthly)
 monthlyInput.innerHTML =``;
 monthlyInput.innerHTML += `Total monthly: ${formMonSal}`
};

function deleteButton(event) {
    let deleteRow = event.target.parentNode.parentNode; //gets the row
    console.log(deleteRow);  // just to check it is correct
    
    deleteRow.remove(); //removes row
};
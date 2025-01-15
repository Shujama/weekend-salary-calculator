function submitButton() {
    console.log("Submit button clicked!");
     
    //   appending to the field inputs  and ids in html
     let fNameInput = document.querySelector('#firstid').value;
     let lNameInput = document.querySelector('#lastid').value;
     let idInput = document.querySelector('#idid').value;
     let titleInput = document.querySelector('#titleid').value;
     let salaryInput = document.querySelector('#salaryid').value;
     let tableAppend = document.querySelector('#tableid');

    //   adding a row with the new information
    tableAppend.innerHTML += `
      <tr> 
        <td>${fNameInput}</td>
        <td>${lNameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td>${salaryInput}</td>
        <td><button onclick = "">Delete</button></td>
     </tr>
   `
    //    clearing the field inputs after submitting
   fNameInput = '';
   lNameInput = '';
   idInput = '';
   titleInput = '';
   salaryInput = '';
   };
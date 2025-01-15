function submitButton() {
    console.log("Submit button clicked!");
     let fNameInput = document.querySelector('#firstid').value;
     let lNameInput = document.querySelector('#lastid').value;
     let idInput = document.querySelector('#idid').value;
     let titleInput = document.querySelector('#titleid').value;
     let salaryInput = document.querySelector('#salaryid').value;
     let tableAppend = document.querySelector('#tableid');
    
    tableAppend.innerHTML += `
      <tr> 
        <td>${fNameInput}</td>
        <td>${lNameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td>${salaryInput}</td>
     </tr>
   `
   };
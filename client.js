submitButton() {
    let fNameInput = document.querySelector('#firstid');
    let lNameInput = document.querySelector('#lastid');
    let idInput = document.querySelector('#idid');
    let titleInput = document.querySelector('#titleid');
    let salaryInput = document.querySelector('#salaryid');
    let tableAppend = document.querySelector('#tableid');
    
    tableAppend.innerHTML += 
      <tr> 
        <td>${fNameInput}</td>
        <td>${lNameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td>${salaryInput}</td>
     </tr>
   
   };
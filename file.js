//  document.getElementById('newStudent').addEventListener('submit',function(e){
//     e.preventDefault();

//     const name=document.getElementById('name').value;
//     const lastName=document.getElementById('lastName').value;
//     const interst=document.getElementById('intersting').value;

//     const tableBody=document.getElementById('table-body');
//     const newRow=document.createElement('tr')

//         const nameCell=document.createElement('td';
//         nameCell.textContent=name;
//         const lastNameCell=document.createElement('td');
//         lastNameCell.textContent=lastName;
//         const interstCell=document.createElement('td');
//         interstCell.textContent=interst;
    




//  })
document.getElementById('addRowForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission

    // Get values from form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    // Create a new row for the table
    const tableBody = document.getElementById('table-body');
    const newRow = document.createElement('tr');

    // Create cells for each piece of data
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    const emailCell = document.createElement('td');
    emailCell.textContent = email;
    const ageCell = document.createElement('td');
    ageCell.textContent = age;

    // Create a cell for the action button
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Delete';
    
    // Add the delete functionality
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(newRow);  // Remove the row when delete button is clicked
    });
    
    actionCell.appendChild(deleteButton);

    // Append cells to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(actionCell);

    // Append the new row to the table
    tableBody.appendChild(newRow);

    // Reset the form fields
    document.getElementById('addRowForm').reset();
});

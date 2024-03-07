


// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//summary table


// Collect employee data
const collectEmployees = function() {
  let employees = [];

  let addAnother = true;

  let index = 0;

  while (addAnother === true) {
    const currentEmployee = {
      firstName:"",
      lastName:"",
      salary:"",
    };
    currentEmployee.firstName = prompt("Enter Employee First Name:");
    
    currentEmployee.lastName = prompt("Enter Employee Last Name:");
    let userResponseCapture = "NaN";
    while (isNaN(userResponseCapture)){ 
      userResponseCapture = prompt("Enter Employee Salary:");
    }
   currentEmployee.salary = userResponseCapture;
    
    
    employees[index] = currentEmployee;
    
    index ++;
    addAnother = confirm("add another?:");
  }
  
  return employees.sort((a,b) => {
    (a.lastName < b.lastName) ? 1 : (a.lastName > b.lastName) ? -1 : 0;
  });
}



// Display the average salary

const displayAverageSalary = function(employeesArray) {
  const summaryTable = document.querySelector('#summary-table');

  let sum = 0;
  let index = 0;
  for (const employee of employeesArray) {
    sum = sum + parseInt(employee.salary);
    console.log(`employee ${index} salary is ${employee.salary} and sum is ${sum}`);
    index++;
  }

  summaryTable.textContent = '';

  const averageSalary = sum / index;
      
  const newTableRow = document.createElement("tr");
  const totalNumberEmployeesCell = document.createElement("td");
    totalNumberEmployeesCell.textContent = employeesArray.length;

    newTableRow.append(totalNumberEmployeesCell);

    const averageSalaryCell = document.createElement("td");
    averageSalaryCell.textContent = averageSalary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(averageSalaryCell);

    summaryTable.append(newTableRow);

  }


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  employee = employeesArray[Math.floor(Math.random() * employeesArray.length)]
  console.log(`a randomly selected employee is: ${employee.firstName} ${employee.lastName} whose salary is ${employee.salary}`);
}






/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/


// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
const employees = [
{ id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
{ id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
{ id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },

];

// Function to display all employees
//! by using Map method

function displayEmployees() {
    const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// To calculate salaries
//! by using reduce method
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// to disPLAY hr details
//! b
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.d}</p>`)
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//  to find employee by ID
//! by using find method
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department}</p>`
    } else {
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}
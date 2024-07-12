
const Employee = require("./class/employee.js");

//create a new employee
let johnWick = new Employee ("John Wick", "Dog Lover");

//call sayName() after 2 seconds
setTimeout(johnWick.sayName.bind(johnWick), 2000);

//call sayOccupation() after 3 seconds
setTimeout(johnWick.sayOccupation.bind(johnWick), 3000);

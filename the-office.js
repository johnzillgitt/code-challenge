/**
TODO #1
take the names from the remainingPeopleList and add them to the peopleList array. This should not be done programmatically, it is just a copy and paste job.
"Accounting" includes Oscar, Angela, and Kevin
"Sales" includes Jim, Dwight, Michael, Andy, Stanley, and Phyllis
"Human Resources" includes Toby, Holly, and Gabe
"Temps and Interns" include Ryan, Pete, and Gabe
"Corporate" includes Jan and  Robert
"Warehouse" includes Darryl and Roy
"Reception" includes Pam and Erin
"Support" includes the remaining individuals
**/
const employeesArray = [
	{name: "Oscar Martinez", department: "Accounting"}, {name: "Michael Scott", department: "Sales"},
	{name: "Angela Martin",department: "Accounting"},{name: "Kevin Malone",department: "Accounting"},
	{name: "Jim Halpert",department: "Sales"},{name: "Dwight Schrute",department: "Sales"},
	{name: "Michael Scott",department: "Sales"},{name: "Andy Bernard",department: "Sales"},
	{name: "Stanley Hudson",department: "Sales"},{name: "Phyllis Vance",department: "Sales"},
	{name: "Pam Beezley",department: "Reception"},{name: "Erin Hannon",department: "Reception"},
	{name: "Toby Flenderson",department: "Human Resources"},{name: "Jan Levinson",department: "Corporate"},
	{name: "Creed Bratton",department: "Support"},{name: "Ryan Howard",department: "Temps and Interns"},
	{name: "Darryl Philbin",department: "Warehouse"},{name: "Holly Flax",department: "Support"},
	{name: "Meredith Palmer",department: "Support"},{name: "Kelly Kapoor",department: "Support"},
	{name: "Gabe Lewis",department: "Human Resources/Temps and Interns"},{name: "Robert California",department: "Corporate"},
	{name: "Roy Anderson",department: "Warehouse"},{name: "Peter Miller",department: "Temps and Interns"},
	{name: "Clark Green",department: "Support"},
];

const remainingEmployeesArray = ["Jim Halpert", "Pam Beezley", "Kevin Malone", "Dwight Schrute", "Andy Bernard", "Angela Martin", "Erin Hannon", "Toby Flenderson", "Stanley Hudson", "Jan Levinson", "Creed Bratton", "Ryan Howard", "Darryl Philbin", "Holly Flax", "Meredith Palmer", "Kelly Kapoor", "Gabe Lewis", "Robert California", "Phyllis Vance", "Roy Anderson", "Peter Miller", "Clark Green"]; 
let firstNamesArray = [];
let lastNamesArray = [];
let departmentsCount = {}; 
/**
TODO #2
Call the processAllEmployees passing in the employeesArray

TODO #4
print out all of the first names to the console
**/

processAllEmployees(employeesArray);
 
 /**
  TODO #3
  loop through all of the employees and add their names to the firstNamesArray and lastNames array unless they are part of corporate or HR because according to Michael "Toby is in HR, which technically means he works for corporate, so he's not really a part of our family."
  **/
function processAllEmployees(allEmployees) {
	for (i = 0; i < allEmployees.length; i++) {
		var emp = allEmployees[i];
		if (!(emp.department.includes("Corporate") || emp.department.includes("Human Resources"))) {
			splitFullName(emp.name);
		}
	}
} 
function splitFullName(fullName) {
	var splitName = fullName.split(" ");
	firstNamesArray.push(splitName[0]);
	lastNamesArray.push(splitName[1]);
} 
function incrementDepartmentCount(department) {
	departmentsCount++;
} 
function printOutFirstNames() {
	for (i = 0; i < firstNamesArray.length; i++) {
		console.log(firstNamesArray[i]);
	}
}

printOutFirstNames();

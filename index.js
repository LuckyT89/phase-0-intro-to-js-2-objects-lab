// Write your solution in this file!
const employee = {
    name: 'Dan',
    streetAddress: '5 South Street'
}


// Function1
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee};

    newObject[key] = value;

    return newObject;
}


// Function2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}


// Function3
function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};

    delete newObject[key];

    return newObject;
}


// Function4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}
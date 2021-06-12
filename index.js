// Your code here
function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRecords) {
    return employeeRecords.map(e => {
        return createEmployeeRecord(e)
    })
}

function createTimeInEvent(employee, dateTime) {
    let dateTimeArray = dateTime.split(' ')
    employee.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateTimeArray[1]),
        date: dateTimeArray[0]
    })
    return employee
}

function createTimeOutEvent(employee, dateTime) {
    let dateTimeArray = dateTime.split(' ')
    employee.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateTimeArray[1]),
        date: dateTimeArray[0]
    })
    return employee
}

function hoursWorkedOnDate(employee, date) {

}
/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(firstName, familyName, title, payPerHour) {
  array = [];
  array[0] = firstName;
  array[1] = familyName;
  array[2] = payPerHour;
  timeInEvents = [];
  timeOutEvents = [];
}

function createEmployeeRecord(row) {
return {
  firstName: row[0],
  familyName: row[1],
  title: row[2],
  payPerHour: row[3],
  timeInEvents: [],
  timeOutEvents: []
  };
}

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row);
    });
};

let createTimeInEvent = function(employee, dateStamp){
  let [date, hour] = dateStamp.split('');
  
  employee.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date,
  });
};

let timeOutEvent = function(employee, dateStamp){
  let [date, hour = dateStamp.split('')
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date,
  })
  return employee
})

let wagesEarnedOnDate = function(employee, specificDate)
let rawWage = hoursWorkedOnDate(employee, specificDate)
* employee.payPerHour
return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
  let daysWorked - employee.timeInEvents.map(function(e){return e.date 
  })
let payable = daysWorked.reduce(function(memo, d){
  return memo + wagesEarnedOnDate(employee, d)
}, 0)
return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
  return arrayOfEmployeeRecords.reduce(function(memo, re) {
    return memo + allWagesFor(rec)
  
}, 0)
}
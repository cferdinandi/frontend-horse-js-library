// Create a Date() object for Christmas
let christmas = new Date('December 25, 2021');

// Get some details
let day = getDay(christmas);
let month = getMonth(christmas);
console.log(day, month);

// Modify the date
addDays(christmas, 7);
addYears(christmas, 1);
console.log(christmas);
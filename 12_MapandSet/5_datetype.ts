let eDate:any = new Date();
console.log(eDate);
console.log(eDate.getDay());  // gives the index of the day, for example 0 = Sunday
console.log(eDate.getDate());
console.log(eDate.getMinutes());
console.log(eDate.toTimeString());

eDate = new Date("2024-03-23 2:05 PM");  
console.log(eDate);

console.log(eDate.getDay());  // gives the index of the day, for example 5 = Friday
console.log(eDate.getDate());
console.log(eDate.getHours());
console.log(eDate.getMinutes());
console.log(eDate.toTimeString());


eDate = new Date("2024-04-02 2:05 AM");  
console.log(eDate);

console.log(eDate.getDay());  // gives the index of the day, for example 1 = Monday
console.log(eDate.getDate());
console.log(eDate.getHours());
console.log(eDate.getMinutes());
console.log(eDate.toTimeString());

eDate.setDate(20);
console.log(eDate);

// 0 = Sun
// 1 = Mon
// 2 = Tues
// 3 = Wed
// 4 = Thu
// 5 = Fri
// 6 = Sat
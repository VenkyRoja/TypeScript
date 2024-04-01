var levels:number[] = [20, 30, 12, 30, 100, 20];

console.log(levels.toString());
console.log(levels.join(" "));
console.log(levels.join(" | "));

console.log(levels.slice(3,5));
console.log(levels);
console.log(levels.slice(3));
console.log(levels);

levels.splice(2, 88, 99);
console.log(levels);

levels.push(2, 5, 11);
console.log(levels);

console.log(levels.pop());
console.log(levels);


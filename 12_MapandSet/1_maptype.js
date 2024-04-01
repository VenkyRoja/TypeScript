const studentScores = new Map();
studentScores.set('John', 90);
studentScores.set('Bob', 80);
studentScores.set('Ahmed', 90);
studentScores.set('Raja Ram', 100);
console.log(studentScores.get('John'));
console.log(studentScores.get('Bob'));
console.log(studentScores.get('Raja Ram'));
console.log(studentScores);
console.log(studentScores.size);
studentScores.delete("Bob");
console.log(studentScores.has("Bob"));
console.log(studentScores);
console.log(studentScores.keys());
for (let key of Array.from(studentScores.keys())) {
    console.log(key);
    console.log(studentScores.get(key));
}
console.log(studentScores.values());
console.log(studentScores.entries());
studentScores.clear();
console.log(studentScores);

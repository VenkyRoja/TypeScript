interface Names {
    [index:number]:string;
}

var studentNames:Names = ["John","Bob","Doug"];


interface Scores {
    [index:string]:number;
}

var studentScores : Scores = {};

studentScores["John"] = 100;
studentScores["Bob"] = 90;

for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
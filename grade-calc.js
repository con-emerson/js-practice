// Convert user input from string to int
let userScore = parseInt(prompt("Enter your score: "));
let userGrade = "";

if (userScore >= 90 && userScore <= 100) {
  userGrade = "A";
} else if (userScore >= 80 && userScore <= 89) {
  userGrade = "B";
} else if (userScore >= 70 && userScore <= 79) {
  userGrade = "C";
} else if (userScore >= 60 && userScore <= 69) {
  userGrade = "D";
} else {
  userGrade = "F";
}

console.log("The user grade is: ",userGrade);

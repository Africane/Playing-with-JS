// this is a grade book that calculates the marks of students
let score = 0;

function getAverage(scores) {
    for(const num of scores) {
        score += num;
    }
    return score / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));


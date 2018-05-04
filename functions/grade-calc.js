// studentScore, totalPossibleScore...generate letter grade and percentage
// 'You got a C (75%)!'

const gradeCalc = function (studentScore, totalPossibleScore = 100) {
    const percentage = (studentScore / totalPossibleScore) * 100
    let letterGrade = ''

    if (percentage >= 90) {
         letterGrade = 'A'
    } else if (percentage >= 80) {
        letterGrade = 'B'
    } else if (percentage >= 70) {
        letterGrade = 'C'
    } else if (percentage >= 65) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade}! (${percentage}%)`
}

const grade = gradeCalc(94);
console.log(grade);

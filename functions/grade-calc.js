// studentScore, totalPossibleScore...generate letter grade and percentage
// 'You got a C (75%)!'

 const gradeCalc = function (studentScore, totalPossibleScore = 100) {
   const percent = (studentScore/totalPossibleScore) * 100
   let letter;

   if (percent >= 90) {
     letter = 'A'
   } else if (percent >= 80) {
     letter = 'B'
   } else if (percent >= 70) {
     letter = 'C'
   } else if (percent >= 60){
     letter = 'D'
   } else {
     letter = 'F'
   }

   return `You got a ${letter} with a percentage of ${percent}%!`
 }

 const total = gradeCalc(120)
 console.log(total);


// const gradeCalc = function (studentScore, totalPossibleScore = 100) {
//     const percentage = (studentScore / totalPossibleScore) * 100
//     let letterGrade = ''
//
//     if (percentage >= 90) {
//          letterGrade = 'A'
//     } else if (percentage >= 80) {
//         letterGrade = 'B'
//     } else if (percentage >= 70) {
//         letterGrade = 'C'
//     } else if (percentage >= 65) {
//         letterGrade = 'D'
//     } else {
//         letterGrade = 'F'
//     }
//
//     return `You got a ${letterGrade}! (${percentage}%)`
// }
//
// const grade = gradeCalc(94);
// console.log(grade);

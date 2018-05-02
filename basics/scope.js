// lexical/static scoping
// global - defined outside of all blocks
// local - defined inside a block

// in scope, you can access variables defined in the scope, or parent/ancestor scope

// global (varOne)
  // local (varTwo)
    // local (varFour)
  // local (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo);

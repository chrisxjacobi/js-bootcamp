// array with five todos, you have X todoes, print the first and second to last items

const todos = ['walk the dog', 'eat dinner', 'go to the gym', 'study JS', 'kiss bb'];

// delete third item, add new item on end, remove first item
todos.splice(2, 1)
todos.push('pet sunny')
todos.shift()

console.log(`You have ${todos.length} todos!`);

// 1, first item, 2, seconde item, 3, third item

todos.forEach(function (todo, index) {
    let num = index + 1
    console.log(`${index + 1}. ${todo}`);  
})

for (let count = 0; count < todos.length; count++) {
    let num = count + 1
    let todo = todos[count]
    console.log(`${num}. ${todo}`);
    
}
const numbers = [1, 2, 3, 4, 5]
const cars = ["audi", "mercedes", "suzuki", "alto"]
const numbers2 = [[6,7,8,9,10], [11,12,13,14], [20,30,40,50]]

const [firstNum, secondNum, ...restNum] = numbers

console.log(firstNum) // outputs 1 
console.log(secondNum) // outputs 2

console.log(restNum) // will output an array of the rest

const result = numbers2.map( ([first, second, ...rest]) => {
    return [first + second, rest]
})

console.log(result) // will output an array of arrays, each array has first element as sum of the first 2 numbers of each array numbers2 and the second element is the array rest is being populated with.

// COMBINING ARRAYS
const combination = [...numbers, "EXTRA HUN MAI", ...cars, "MAI BHI EXTRA HUN"]
console.log(combination)

const carDetails = {
    id: 1, 
    name: "alto",
    model: "sabse best",
    type: "firstHand"
}

const {id, name: carName, model: carModel, price = "Nahi pata", ...rest} = carDetails

console.log(rest) // still prints an object even for one entry
console.log(price) // default value printed in case it's not there


const persons = [
    {
        id: 1, 
        name: "Ronak",
        course: "Bsc",
        favGame: "Chess",
        age: 20
    },
    {
        id: 2,
        name: "Pushu",
        course: "Bsc",
        favGame: "VolleyBall",
        age: 17
    },
    {
        id: 3,
        name: "Mrigu",
        course: "Bsc",
        favGame: "VolleyBall",
        age: 20
    },
]

persons.map( ({id, name: firstName, course: Class, ...rest}) => {
    console.log(`Person ${id} is ${firstName} in the class ${Class} and the rest details are that his favourite game is ${rest.favGame} and his age is ${rest.age}`)
})

// firstName acts as another variable given to the value of the name key of each object in the array, same is with the Class, id is accessed directly
// rest is being populated with an object containing rest key-values.
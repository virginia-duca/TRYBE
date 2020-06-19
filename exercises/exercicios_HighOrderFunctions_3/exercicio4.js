const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]

// escreva filterPeople abaixo

function filterPeople(array){
    const newArray = array.filter( item => item.nationality === "Australian" && item.bornIn < 2000)
    return newArray
}


filterPeople = (people) => {
    const filteredPeople = people.filter(({bornIn, nationality}) => { 
      return (bornIn >= 1900 && bornIn < 2000) && nationality === 'Australian'; 
    });
    return filteredPeople;
}


const filteredPeople = filterPeople(people)


assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
    

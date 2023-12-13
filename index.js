// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(arr) {
    let newArray = [arr[0],arr[1]]
    return newArray
    
}
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function(arr) {
    let newArray = [arr[arr.length -2],arr[drivers.length -1]]
    return newArray
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers[1](drivers))

function createFareMultiplier(multiplier){

    return function(fare){
        return fare * multiplier
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    return fare * 3
}

let selectDifferentDrivers = function(arr, func){
    return(func(arr))
}
console.log(selectDifferentDrivers(drivers,selectingDrivers[0]))

const fareQuintupler = createFareMultiplier(5)
fare = 10
const quintipledfare = fareQuintupler(fare)
    
console.log(quintipledfare)


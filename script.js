// Hide the loading screen after 2 seconds
setTimeout(function () {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}, 3000);


// Show list of riders
let ridersComing = ["Misha", "Anan", "Lior", "Avi", "Mohammad","Samir"]
let riderName = ""
document.getElementById("listOfPeople").innerText = ridersComing

// func to add rider name to list and show it, if name exists show alert messege
function addRider() {
    riderName = document.getElementById("username").value
    if (findNum(ridersComing, riderName)) {
        document.getElementById("alert").innerHTML = "Name already added!"
        
    }else{
        ridersComing.push(riderName)
        document.getElementById("listOfPeople").innerText = ridersComing
        document.getElementById("alert").innerHTML = "" 
    }
     
}

// func to remove last name from list
function removeRider() {
    ridersComing.pop()
    document.getElementById("listOfPeople").innerText = ridersComing
 
}


// list of numbers
let numbers = [1, 3, 4, 6, 88, 23, 43, 55, 96, 12, 22, 7, 19]

// func that take a list and returns the sum of even numbers
function sumEvenNumbers(list) {
    // variable to hold the sum number
    let sum = 0
    // loop throught the list, check if list[index] % 2 ==0 -> add num to sum
    for (let index = 0; index < list.length; index++) {
        if (list[index] % 2 == 0) {
            sum += list[index]
        }

    }
    return sum
}

// func that takes a list and a number, returns the sum of the numbers that are bigger that the given number
function sumOfBiggerNumbers(list, num2check) {
    // check if num in list is > than num2check, if true add num to sum and return it
    let sum = 0
    for (let index = 0; index < list.length; index++) {

        if (list[index] > num2check) {
            sum += list[index]

        }

    }
    return sum
}

// func that prints min num from given list to console
function minNumberInArray(list) {
    // set min as the first num in list
    let min = list[0]
    // loop the list and check if each num in list is smaller than min, if so store it in min and check next itration
    for (let index = 0; index < list.length; index++) {
        if (min > list[index]) {
            min = list[index]

        }


    }
    console.log(min);
}

// func that prints to console last num in list
function lastNumInArray(list) {
    console.log(list[list.length - 1])

}

// func that returns a list with 10 rand nums
function tenDigitRandomArray() {
    let randomArray = []
    for (let index = 0; index < 10; index++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1)

    }
    return randomArray

}

// func that takes a list and a num, checks if num in list, returns true/false
// its needed for the lotary func
function findNum(list, x) {
    for (let index = 0; index < list.length; index++) {
        if (list[index] == x) {
            return true

        }

    }
    return false
}

// func that returns a list of 7 numbers from 1-36, no repeated nums
function lotaryNum() {
    let lotary = []
    let randomNum = 0
    // boolian to check if list got to 7 nums -> stop loop
    let genrate = true
    while (genrate) {
        // assign random num from 1 to 36 to randomNum var
        randomNum = Math.floor(Math.random() * 36) + 1
        // check if lotary array got to 7 nums
        if (lotary.length < 7) {
            // check if num is already in list
            if (!findNum(lotary, randomNum)) {
                lotary.push(randomNum)

            } else {
                // if yes break loop and start again
                break
            }
        }else{
            // if list is full stop loop
            genrate = false
        }
    }
    return lotary
}



// show the sum of even numbers in numbers 
console.log(sumEvenNumbers(numbers));

// show the sum of numbers bigger than given num
console.log(sumOfBiggerNumbers(numbers, 39));

// print min num in list
minNumberInArray(numbers)

// print last num in list
lastNumInArray(numbers)

// show 10 random nums in list
console.log(tenDigitRandomArray());

// genrate lotary nums
console.log(lotaryNum());





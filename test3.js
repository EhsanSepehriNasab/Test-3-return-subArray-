// test2
var numbers = [14, 12, 11, 20]

function longerstSubArray(input) {
    let answer = {}, // Define answer object to make object with contiguous numbers
        result = [], // Define result array to return result
        counter = 0, // Define counter to count lenght of contiguous numbers
        obj = null, // Define obj to keep first of contiguous numbers
        biggestNum = 0, // Define obj to keep Longest number in object of contiguous numbers
        biggestIndex = 0 // Define obj to keep index Longest number in object of contiguous numbers\
    let sortedInput = [...input].sort(function(a, b) {
        return a - b;
    }); // Sort input

    for (let i = 0; i < sortedInput.length; i++) { // Make Loop in sortedInput
        if (sortedInput[i] == sortedInput[i + 1] - 1) { // Check contiguous number
            if (counter == 0) { // Check counter to make sure it is a first number of contiguous numbers
                answer[sortedInput[i]] = [] // answer object give us object of contiguous numbers at the end
                obj = sortedInput[i]
            }
            answer[obj].push(sortedInput[i + 1]) // push next number in answer
            counter++
        } else {
            if (counter > biggestNum) { // Get longet contiguous numbers from now
                biggestNum = counter
                biggestIndex = obj
            }
            counter = 0
            obj = null
        }
    }

    // Make longets contiguous numbers
    result.push(biggestIndex)
    result.push(...answer[biggestIndex])

    // Make subArray
    let finalSubArray = []
    for (let number of input) {
        if (result.includes(number)) finalSubArray.push(number)
    }
    return finalSubArray
};

var longerstSubArray = longerstSubArray(numbers);
console.log(longerstSubArray)
function addToZero(numbers) {
    const numbersSet = new Set(); //I used "Set" to avoid nesting loops
    
    for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
      if (numbersSet.has(-currentNumber)) {
        return true;
      }
      numbersSet.add(currentNumber);
    }
    return false;
  }
  
console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1,2,3]))
console.log(addToZero([1,2,3,-2]))

function addToZero(nums){
    let a = nums
    let b = nums
    for(let i=0; i<nums.length; i++)
    if(a[i]+b[i] === 0){
        return true
    } 
    else return false
}
console.log(addToZero([]))
console.log(addToZero([1]))
console.log(addToZero([1,2,3]))
console.log(addToZero([1,2,3,-2]))

//Objective is, given an array of size n + 1 with integers from 1 to n,
//to find the duplicate element


//O(n) solution using a slow/fast pointer 

//Start fast one up from slow
let slow = nums[0]
let fast = nums[slow]
    
while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
}
    
slow = 0
//Find the intersection from the head of the array
while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
}
    
return fast

function getSum(numberArr, target) {
  const numMap = {};

  for (let i = 0; i < numberArr.length; i++) {
    const complement = target - numberArr[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[numberArr[i]] = i;
  }

  return [];
}



console.log(getSum([2, 7, 11, 15], 9));  
console.log(getSum([3, 2, 4], 6));       
console.log(getSum([3, 3], 6));          
console.log(getSum([5, 8, 9, 0], 14));    
console.log(getSum([0, 1, 2, 3, 10], 10));

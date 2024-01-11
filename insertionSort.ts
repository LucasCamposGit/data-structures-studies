function insertionSort(nums: number[]): number[] {

  for (let j = 1; j < nums.length; j++) {
    let key = nums[j];
    // insert nums[j] in the sorted sequence nums[1... j - 1];
    let i = j - 1;

    while (i >= 0 && nums[i] > key) {
      nums[i + 1] = nums[i];
      i = i - 1;
    }
    nums[i + 1] = key;
  }
  return nums;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]));

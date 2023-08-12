export function calculateMean(nums: number[]): number {
    let sum = 0;
    
    for(let num of nums) {
        sum += num;
    }

    const result = sum / nums.length
    return result;
}

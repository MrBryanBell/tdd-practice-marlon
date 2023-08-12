export function calculateMean(nums: number[]): number {

    if ( nums.length === 0 ) {
        return 0;
    }

    const sum = nums.reduce((acc, curr) => {
        return acc += curr
    }, 0)

    const result = sum / nums.length
    return result;
}

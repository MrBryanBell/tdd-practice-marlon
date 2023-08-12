/* 
    TDD WORKFLOW: RED -> GREEN -> REFACTOR

    matcher

    // Triple AAA
    // Arrange, Act, Assert

    // Happy Path
    // Edge Cases

    // "Change is the enemy of good software design"
*/

import { it, expect } from 'vitest';
import { calculateMean } from './mean';


it('should return a number', () => {
    // Arrange
    const expectedType = 'number';

    // Act
    const result = calculateMean([1, 2, 4]);

    // Assert    
    expect(result).toBeTypeOf(expectedType);
})

it('should return 3 if numbers are 1, 2, 3, 4, 5', () => {
    // Arrange
    const expected = 3;
    const nums = [1, 2, 3, 4, 5];

    // Act
    const result = calculateMean(nums);

    // Assert
    expect(result).toBe(expected);
})

it('should return 6 if numbers are 2, 4, 6, 8, 10', () => {
    // Arrange
    const expected = 6;
    const nums = [2, 4, 6, 8, 10];

    // Act
    const result = calculateMean(nums);

    // Assert
    expect(result).toBe(expected);
})

it('should return zero if array is empty', () => {
    // Arrange
    const expected = 0;
    const nums: number[] = [ ];

    // Act
    const result = calculateMean(nums);

    // Assert
    expect(result).toBe(expected);
})
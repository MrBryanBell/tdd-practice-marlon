/* 
    TDD WORKFLOW: RED -> GREEN -> REFACTOR

    matcher

    // Triple AAA
    // Arrange, Act, Assert
*/

import { it, expect } from 'vitest';
import { calculateMean } from './mean';


it('should return a number', () => {
    // Arrange
    const expectedType = 'number';

    // Act
    const result = calculateMean([1, 2, 4]); 
        
    expect(result).toBeTypeOf(expectedType);
})
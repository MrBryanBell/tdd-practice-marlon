import { it, expect } from 'vitest';
import { isPalindrome } from './palindrome';


it('should return boolean true', () => {
    // Arrange
    const expected = true;

    // Act
    const result = isPalindrome('noon');

    // Assert    
    expect(result).toBe(expected);
})



it('should return boolean false', () => {
    // Arrange
    const expected = false;

    // Act
    const result = isPalindrome('NotAPalindrome');

    // Assert    
    expect(result).toBe(expected);
})
export function isPalindrome(phrase: string): boolean {

 const re = /[^A-Za-z0-9]/g;
 phrase = phrase.toLowerCase().replace(re, '');

 let len = phrase.length;
 for (let i = 0; i < len/2; i++) {
   if (phrase[i] !== phrase[len - 1 - i]) {
       return false;
   }
 }
 return true;
}

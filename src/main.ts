import { calculateMean } from "./test/mean";
import { isPalindrome } from "./test/palindrome";

const average = calculateMean([2,4,6,8,10]);
alert('Mean value for array->[2,4,6,8,10] is: '+average); //it should be 6

const phrase = 'noon';
const palindrome = isPalindrome(phrase); 
alert('Its ' + phrase + ' a palindrome? ' + palindrome);


// Tipado de Primitivos
// string, number, boolean

// let age: number = 22;
// const cousinName = "Marlon";
// const isMarried = false;

// interface User {
//     name: string;
//     age: number;
// }

// const user: User = {
//     age: 12,
//     name: 'err'
// }

// const users: User[] = [
//     {
//         name: 'Bryan',
//         age: 22,
//     },
//     {
//         name: 'Marlon',
//         age: 39
//     },
//     {
//         name: 'erick',
//         age: 24,
//     }
// ];






//check this example later

/* interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

async function getUsers() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const resp = await fetch(URL);
    const usersData = await resp.json() as User[];

    return usersData;
}

const users = await getUsers();

users.map( user => {
    user.email
})

export {}; */
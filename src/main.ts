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

interface User {
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


























export {};
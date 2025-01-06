// Not a good way to define object in typescript
// const person: {
//     name: string;
//     age: number;    
// } = {
//     name: 'John',
//     age: 30
// };

// Better way to define object
// const person: {
//     name: string;
//     age: number;
//     hobies: string[];
//     role: [number, string]; // Tuple    
// } = {
//     name: 'John',
//     age: 30,
//     hobies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

enum Role { ADMIN = 4, READ_ONLY = 200, AUTHOR = 'AUTHOR' };

const person = {
    name: 'John',
    age: 30,
    hobies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];

for (const hobby of person.hobies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! Error !!!
}

console.log(person.name);
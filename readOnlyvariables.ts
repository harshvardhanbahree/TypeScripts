interface User{
    name: string;
    department: string;
    readonly userId: number
}

const a: User = {
    name:'asas',
    department:'asdfasd',
    userId:1234123
}

console.info(a.userId)
// a.userId= 45   // Not allowed
console.info(a)
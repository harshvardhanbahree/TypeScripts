interface UserInterface{
    name: string;
    age?    : number;
    id: number;
    greet(message: string): void;
}   

const user: UserInterface = {
id:2,
name:'Harsh',
greet(message:string):void{
    console.info(message)
},
};

user.greet("Hello");

if(!user.age){
    console.info('No age for this user')
}
console.info(user)
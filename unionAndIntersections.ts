const printId = (id: string | number) =>{
console.info("Id:",id);
}

printId("asdf")
printId(121212)


// =========


type stringNumberType = string | number;

const psrint = (id: stringNumberType) =>{
    console.info("Id:",id);
}
    
psrint("asdf")
printId(121212)
// --------------------------


interface Business{
    name: string;
    creditScore: number;
}

interface userIndentity{
    id: number;
    email: string;
}

type EmbployeeType = Business & userIndentity;

const getEmployee = (user: EmbployeeType): void =>{
    console.info("Name:",user.name,"Email:",user.email)
}

getEmployee({name:"Harsh",creditScore:23,id:12,email:"harsh@email.com",})
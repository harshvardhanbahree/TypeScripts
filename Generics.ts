class storageContainer<T> {
    private contents: T[];

    constructor(){
        this.contents = [];
    }  

    add(item: T): void{
        this.contents.push(item);
    }

    get(id:number):T | undefined{ 
        return this.contents[id];
    }
}

const usernames= new storageContainer<string>();
usernames.add("hsdf");
usernames.add("asdfsdf");
usernames.add("edrfgh");
console.info(usernames.get(2))


const friendsCount= new storageContainer<number>();
friendsCount.add(1);
friendsCount.add(2);
friendsCount.add(5);
console.info(friendsCount.get(2))

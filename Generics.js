"use strict";
class storageContainer {
    constructor() {
        this.contents = [];
    }
    add(item) {
        this.contents.push(item);
    }
    get(id) {
        return this.contents[id];
    }
}
const usernames = new storageContainer();
usernames.add("hsdf");
usernames.add("asdfsdf");
usernames.add("edrfgh");
console.info(usernames.get(2));
const friendsCount = new storageContainer();
friendsCount.add(1);
friendsCount.add(2);
friendsCount.add(5);
console.info(friendsCount.get(2));

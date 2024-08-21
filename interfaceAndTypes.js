"use strict";
const user = {
    id: 2,
    name: 'Harsh',
    greet(message) {
        console.info(message);
    },
};
user.greet("Hello");
if (!user.age) {
    console.info('No age for this user');
}
console.info(user);

"use strict";
const printId = (id) => {
    console.info("Id:", id);
};
printId("asdf");
printId(121212);
const psrint = (id) => {
    console.info("Id:", id);
};
psrint("asdf");
printId(121212);
const getEmployee = (user) => {
    console.info("Name:", user.name, "Email:", user.email);
};
getEmployee({ name: "Harsh", creditScore: 23, id: 12, email: "harsh@email.com", });

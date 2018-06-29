const functions = require("./function");

/*
//run certain test or perform some operation before and after each test have exectued
beforeEach(() => initDataBase());
afterEach(() => closeDataBase());
*/

//run certain test or perform some operation before and after all tests have exectued
beforeAll(() => initDataBase());
afterAll(() => closeDataBase());

const nameCheck = () => console.log("Checking name....");

//run beforeEach only for the tests described inside describe()
describe('Checkng Names', () => {
    beforeEach(() => nameCheck());
    
    test("User is Minanshu", () => {
        const user = "Minanshu";
        expect(user).toEqual('Minanshu');
    });
    test("User is MinMin", () => {
        const user = "MinMin";
        expect(user).toEqual('MinMin');
    });
});


const initDataBase = () => console.log("Database Initialized!!");
const closeDataBase = () => console.log("Database Closed!!");

test("add 2 + 2 gives 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Two test here", () => {
    let a = 10;
    //expect.assertions(1);
    expect(1+2).toBe(3);
    //expect(1+4).toBe(5);
});

//CHECK for falsy or truthy values
//toBeNull, toBeUndefined, toBeTruthy, toBeFalsy

test("check if user created", () => {
  expect(functions.createUser("Min", 20)).toEqual({
    name: "Min",
    age: 20
  });
});

declare class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
}
declare class Employee extends Person {
    readonly id: string;
    name: string;
    private dept;
    city: string;
    constructor(id: string, name: string, dept: string, city: string);
    writeDept(): void;
}
declare let salesEmployee: Employee;
declare let data: (Person | Employee)[];
declare abstract class Class {
    id: string | number;
    name: string;
    constructor(id: string | number, name: string);
    getDetails(): string;
    abstract getSpecific(): string;
}
declare class Student extends Class {
    readonly id: string;
    name: string;
    city: string;
    creditLimit: number;
    constructor(id: string, name: string, city: string, creditLimit: number);
    getSpecific(): string;
}
declare class People extends Class {
    id: number;
    name: string;
    dept: string;
    constructor(id: number, name: string, dept: string);
    getSpecific(): string;
}
declare let classStudent: Class[];
declare type Data = {
    readonly name: string;
    class: number;
    [key: string]: any;
};
declare let human: Data;
